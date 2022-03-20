const mathOperations = require('./calculator');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
        // arrange and act
        var result = mathOperations.sum(1, 2)

        // assert
        expect(result).toBe(3);
    });

    test("subtracting 2 from 3 should return 1", () => {
        // arrange and act
        var result = mathOperations.diff(3, 2)

        // assert
        expect(result).toBe(1);
    });

    test("multiplying 2 and 3 should return 6", () => {
        // arrange and act
        var result = mathOperations.product(2, 3)

        // assert
        expect(result).toBe(6);
    });

    test("50% of 100 should return 50", () => {
        var result = mathOperations.percentage(50, 100)

        expect(result).toBe(50);
    });

    test("5 power of 6 should return 15,625", () => {
        var result = mathOperations.pow(5, 6)

        expect(result).toBe(15625)
    });
})