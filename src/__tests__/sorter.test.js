const sorter = require("../sorter");

describe("test sorting names", () => {
    test("sorting", () => {
        const unsortedNames = [
            Orson Milka Iddins,
            Erna Dorey Battelle,
            Flori Chaunce Franzel,
            Odetta Sue Kaspar,
            Roy Ketti Kopfen,
            Madel Bordie Mapplebeck,
            Selle Bellison,
            Leonerd Adda Mitchell Monaghan,
            Debra Micheli,
            Hailey Avie Annakin
        ];

        const expectedResult = [
            Hailey Avie Annakin,
            Erna Dorey Battelle,
            Selle Bellison,
            Flori Chaunce Franzel,
            Orson Milka Iddins,
            Odetta Sue Kaspar,
            Roy Ketti Kopfen,
            Madel Bordie Mapplebeck,
            Debra Micheli,
            Leonerd Adda Mitchell Monaghan
        ];

        const actualResult = sorter(unsortedNames);

        expect(actualResult).toEqual(expectedResult);
    });

    test("sorting empty array", () => {});

    test("sorting names that has number or invalid char", () => {});
});
