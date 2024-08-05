const fs = require('fs');
const csv = require('csv-parser');

const CSV_FILE = 'food-categories.csv';

const parseCSV = () => {
  return new Promise((resolve, reject) => {
    const records = [];
    fs.createReadStream(CSV_FILE)
      .pipe(csv())
      .on('data', (data) => records.push(data))
      .on('end', () => resolve(records));
  });
};

const writeCSV = (data) => {
  return new Promise((resolve, reject) => {
    const csvContent = "";
    csvContent += "Category Name,Description\n";
    data.forEach((record) => {
      csvContent += `${record['Category Name']},${record.Description}\n`;
    });
    fs.writeFile(CSV_FILE, csvContent, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

module.exports = { parseCSV, writeCSV };