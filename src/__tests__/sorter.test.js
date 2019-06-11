const sorter = require("../sorter");

describe("Sorting Names: Positive Test Cases", () => {
    test("Sorting Names", () => {
        const unsortedNames = [
            "Orson Milka Iddins",
            "Erna Dorey Battelle",
            "Flori Chaunce Franzel",
            "Odetta Sue Kaspar",
            "Roy Ketti Kopfen",
            "Madel Bordie Mapplebeck",
            "Selle Bellison",
            "Leonerd Adda Mitchell Monaghan",
            "Debra Micheli",
            "Hailey Avie Annakin",
        ];
        const expectedResult = [
            "Hailey Avie Annakin",
            "Erna Dorey Battelle",
            "Selle Bellison",
            "Flori Chaunce Franzel",
            "Orson Milka Iddins",
            "Odetta Sue Kaspar",
            "Roy Ketti Kopfen",
            "Madel Bordie Mapplebeck",
            "Debra Micheli",
            "Leonerd Adda Mitchell Monaghan",
        ];
        const actualResult = sorter(unsortedNames);
        expect(actualResult).toEqual(expectedResult);
    });
});

describe("Sorting Names: Negative Test Cases", () => {
    test("sorting empty array", () => {
        const emptyArr = [];

        const expectedResult = Error;

        expect(() => {
            extractLastName(emptyArr);
        }).toThrow(expectedResult);
    });

    test("sorting names that has number or invalid char", () => {
        const unsortedNames = [
            "Erna Dorey Battelle",
            "Flori Chaunce Franzel",
            "Odetta Sue Kaspar",
            "Roy Ketti Kopfen",
            "Erna Dorey B???ttelle",
            "Madel Bordie Mapplebeck",
            "Selle Bellison",
            "Leonerd Adda Mitchell Monaghan",
            "Debra Micheli",
            "Erna Dorey B12345ttelle",
            "Hailey Avie Annakin",
        ];
        const expectedResult = [
            "Hailey Avie Annakin",
            "Erna Dorey B???ttelle",
            "Erna Dorey B12345ttelle",
            "Erna Dorey Battelle",
            "Selle Bellison",
            "Flori Chaunce Franzel",
            "Odetta Sue Kaspar",
            "Roy Ketti Kopfen",
            "Madel Bordie Mapplebeck",
            "Debra Micheli",
            "Leonerd Adda Mitchell Monaghan",
        ];
        const actualResult = sorter(unsortedNames);
        expect(actualResult).toEqual(expectedResult);
    });
});
