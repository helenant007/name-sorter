const extractLastName = require("../extractLastName");

describe("test split names", () => {
    test("split", () => {
        const name = "Selle Bellison";

        const expectedResult = "Bellison";

        const actualResult = extractLastName(name);

        expect(actualResult).toEqual(expectedResult);
    });

    test("split", () => {
        const name = "Helena";

        const expectedResult = "";

        const actualResult = extractLastName(name);

        expect(actualResult).toEqual(expectedResult);
    });

    test("split", () => {
        const name = "Leonerd Adda Mitchell Helena Monaghan";

        const expectedResult = "";

        const actualResult = extractLastName(name);

        expect(actualResult).toEqual(expectedResult);
    });

    test("split", () => {
        const name = "Leonerd Adda Mitchell Monaghan";

        const expectedResult = "Monaghan";

        const actualResult = extractLastName(name);

        expect(actualResult).toEqual(expectedResult);
    });
});
