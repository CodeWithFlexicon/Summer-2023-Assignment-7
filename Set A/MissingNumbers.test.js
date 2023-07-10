const missingNumbers = require("./MissingNumbers");

describe("MissingNumbers", () => {
  test("missingNumbers([1,9,5,4]) => [2,3,6,7,8]", () => {
    expect(missingNumbers([1, 9, 5, 4])).toEqual([2, 3, 6, 7, 8]);
  });

  test("missingNumbers([3,7,9,23,2]) => [1,2,4,5,6,8,10,11,12,13,14,15,16,17,18,19,20,21,22]", () => {
    expect(missingNumbers([3, 7, 9, 23, 2])).toEqual([
      1, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    ]);
  });
});
