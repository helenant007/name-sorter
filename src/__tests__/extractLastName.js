const extractLastName = require("../extractLastName");

describe("Split Name: Positive Test Cases", () => {
    test("1 Given Name and Surname", () => {
        const name = "Selle Bellison";

        const expectedResult = "Bellison";

        const actualResult = extractLastName(name);

        expect(actualResult).toEqual(expectedResult);
    });

    test("2 Given Name and Surname", () => {
        const name = "Erna Dorey Battelle";

        const expectedResult = "Battelle";

        const actualResult = extractLastName(name);

        expect(actualResult).toEqual(expectedResult);
    });

    test("3 Given Name and Surname", () => {
        const name = "Leonerd Adda Mitchell Monaghan";

        const expectedResult = "Monaghan";

        const actualResult = extractLastName(name);

        expect(actualResult).toEqual(expectedResult);
    });
});

describe("Split Name: Negative Test Cases", () => {
    test("Only Surname", () => {
        const name = "Helena";

        const expectedResult = Error;

        expect(() => {
            extractLastName(name);
        }).toThrow(expectedResult);
    });

    test("More than 3 given name", () => {
        const name = "Leonerd Adda Mitchell Helena Monaghan";

        const expectedResult = Error;

        expect(() => {
            extractLastName(name);
        }).toThrow(expectedResult);
    });
});
