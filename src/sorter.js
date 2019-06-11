const extractLastName = require("./extractLastName");

function sort(listOfNames) {
    const sortedNames = listOfNames;
    for (let i = 0; i < listOfNames.length; i++) {
        for (let j = 0; j + i < listOfNames.length - 1; j++) {
            const firstLastName = extractLastName(sortedNames[j]);
            const secondLastName = extractLastName(sortedNames[j + 1]);

            if (firstLastName.localeCompare(secondLastName) === 1) {
                [sortedNames[j], sortedNames[j + 1]] = [
                    sortedNames[j + 1],
                    sortedNames[j],
                ];
            }
        }
    }

    return sortedNames;
}

module.exports = sort;
