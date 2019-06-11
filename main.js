const fs = require("fs");

const sorter = require("./src/sorter");

const fileName = process.argv[2];
const fileContent = fs.readFileSync(fileName).toString();
console.log(fileContent);
const listOfNames = fileContent.split("\n").filter(name => name);

const result = sorter(listOfNames);
console.log(result);
