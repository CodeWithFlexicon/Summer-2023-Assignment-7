const duplicatesFinder = require("./FindAllDuplicates");

describe("duplicateFinder", () => {
  test("[1, 2, 3, 5, 4, 4] => [4]", () => {
    expect(duplicatesFinder([1, 2, 3, 5, 4, 4])).toEqual([4]);
  });

  test("[1, 2, 3, 3, 4, 5, 1, 4, 7, 9, 6, 8] => [4, 3, 1]", () => {
    expect(duplicatesFinder([1, 2, 3, 3, 4, 5, 1, 4, 7, 9, 6, 8])).toEqual([
      4, 3, 1,
    ]);
  });
});
