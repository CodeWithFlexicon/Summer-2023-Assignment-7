const removeDuplicates = require("./RemoveDuplicates");

describe("RemoveDuplicates", () => {
  test("removeDuplicates([1, 3, 7, 2, 5, 4, 6, 3]) => 7", () => {
    expect(removeDuplicates([1, 3, 7, 2, 5, 4, 6, 3])).toEqual(7);
  });

  test("removeDuplicates([1,2,2,3,3,3,5,5,5,5,7,7,7]) => 5", () => {
    expect(removeDuplicates([1, 2, 2, 3, 3, 3, 5, 5, 5, 5, 7, 7, 7])).toEqual(
      5
    );
  });
});
