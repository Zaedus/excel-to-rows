import * as Excel from "exceljs";
import * as path from "path"
import * as fs from "fs"
import { Stream } from "stream";

function parseSpreadSheet(worksheet : Excel.Worksheet) {
    var rows : object[] = [];

    //@ts-ignore
    var columnHeaders = worksheet.getRow(1).values.filter(v => v);

    for(let rowIndex = 2; rowIndex < worksheet.rowCount; rowIndex++) {
        
        var rowData = worksheet.getRow(rowIndex).values;

        //@ts-ignore
        rowData.splice(0, 1);

        var final = {};

        for(let i in rowData) {
            var obj = new Object();
            obj[columnHeaders[i]] = rowData[i];
            final = {...final, ...obj};
        }
        
        rows.push(final);
    }
    
    return rows;
}

/**
 * Parses a csv file or stream.
 */
export async function fromCsv(arg: string | Stream) {
    let wb = new Excel.Workbook();
    let sheet : Excel.Worksheet;

    if(typeof arg == "string") sheet = await wb.csv.readFile(arg);
    else if (arg instanceof Stream) sheet = await wb.csv.read(arg);
    else throw new Error("Invalid type '" + typeof arg + "'");

    return parseSpreadSheet(sheet);
}

/**
 * Parses an xlsx file or stream.
 */
export async function fromXlsx(arg: string | Stream) {
    let wb = new Excel.Workbook();
    let sheet : Excel.Worksheet;

    if(typeof arg == "string") sheet = (await wb.xlsx.readFile(arg)).worksheets[0];
    else if (arg instanceof Stream) sheet = (await wb.xlsx.read(arg)).worksheets[0];
    else throw new Error("Invalid type '" + typeof arg + "'");

    return parseSpreadSheet(sheet);
}

/**
 * Automatically determines the file type and parses it accordingly.
 */
export function from(arg: string) {
    if(!fs.existsSync(arg)) throw new Error("File not found.")
    const ext = path.extname(arg);
    if(ext == ".csv") return fromCsv(arg);
    else if (ext == ".xlsx") return fromXlsx(arg);
    else throw new Error("Invalid file type.");
}