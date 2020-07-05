# excel-to-rows
Parses a spreadsheet and returns the rows as objects.

## Examples

### Read from a file

```js
const excelToRows = require('excel-to-rows');

// Read as .xlsx file
excelToRows.fromXlsx("/path/to/file.xlsx");

// Read as .csv file
excelToRows.fromCsv("/path/to/file.csv");

// Read as automatically determined file type
excelToRows.from("/path/to/file");

```

### Read from a stream

```js
const excelToRows = require('excel-to-rows');
const fs = require('fs');

// Read as .xlsx file
excelToRow.fromXlsx(fs.createReadStream("/path/to/file.xlsx"));

// Read as .csv file
excelToRow.fromXlsx(fs.createReadStream("/path/to/file.csv"));
```
