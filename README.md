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

### Example

data.xlsx

<table>
<thead>
  <tr>
    <th>ID</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Job</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>0</td>
    <td>Albert</td>
    <td>Einstein</td>
    <td>Theoretical Physicist</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Jeff</td>
    <td>Delaney</td>
    <td>JS Developer</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Jeff</td>
    <td>Bezos</td>
    <td>CEO of Amazon</td>
  </tr>
</tbody>
</table>

index.js

```js
const excelToRows = require('excel-to-rows');

(async function() {
    console.log(await excelToRows.from("./data.xlsx"));
}())
```

Output: 
```
[
  {
    ID: 0,
    'First Name': 'Albert',
    'Last Name': 'Einstein',
    Job: 'Theoretical Physicist'
  },
  {
    ID: 1,
    'First Name': 'Jeff',
    'Last Name': 'Delaney',
    Job: 'JS Developer'
  },
  {
    ID: 2,
    'First Name': 'Jeff',
    'Last Name': 'Bezos',
    Job: 'CEO of Amazon'
  }
]
```