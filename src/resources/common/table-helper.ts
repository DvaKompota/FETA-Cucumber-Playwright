export const getTableFromCsvAsArray = async (
    testDataPath: String, 
    fileName: String,
): Promise<String[][]> => {
    const fs = require('fs')
    const path = require('path')
    const filePath = path.join(__dirname, '..', '..', '..', testDataPath, fileName);
    const csv = fs.readFileSync(filePath, {encoding: 'utf8'});
    const arrayOfRows = csv.split(/\r\n|\n/)
    const expectedTable: String[][] = [];
    arrayOfRows.forEach(row => {
        expectedTable.push(row.split(','))
    });
    return expectedTable
};

