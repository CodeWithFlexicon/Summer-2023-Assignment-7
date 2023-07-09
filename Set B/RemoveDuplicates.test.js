const removeDuplicates = require("./RemoveDuplicates");

describe("RemoveDuplicates", () => {
  test("removeDuplicates([1, 3, 7, 2, 5, 4, 6, 3]) => [1,2,3,4,5,6,7]", () => {
    expect(removeDuplicates([1, 3, 7, 2, 5, 4, 6, 3])).toEqual([
      1, 2, 3, 4, 5, 6, 7,
    ]);
  });
});
