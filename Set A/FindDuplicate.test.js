const theDuplicateFinder = require("./FindDuplicate");

describe("theDuplicateFinder", () => {
  test("theDuplicateFinder([1, 3, 7, 2, 5, 4, 6, 3]) => 3", () => {
    expect(theDuplicateFinder([1, 3, 7, 2, 5, 4, 6, 3])).toEqual(3);
  });

  test("theDuplicateFinder([12, 3, 4, 1, 9, 11, 7, 5, 10, 2, 8, 6, 7] => 7", () => {
    expect(
      theDuplicateFinder([12, 3, 4, 1, 9, 11, 7, 5, 10, 2, 8, 6, 7])
    ).toEqual(7);
  });
});
