const fs = require("fs");

const sorter = require("./src/sorter");

const fileName = process.argv[2];
const fileContent = fs.readFileSync(fileName).toString();
const listOfNames = fileContent.split("\n").filter(name => name);

const result = sorter(listOfNames);
const formatResult = result.join("\n");
console.log(formatResult);

fs.writeFileSync("sorted-names-list.txt", formatResult);
