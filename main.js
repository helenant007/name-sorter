const fs = require("fs");

const sorter = require("./src/sorter");

const result = sorter(["Helena", "Natanael"]);

const fileName = process.argv[2];
const fileContent = fs.readFileSync(fileName);

console.log(result);
