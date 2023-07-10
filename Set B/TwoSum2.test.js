const twoSumII = require("./TwoSum2");

describe("twoSumII", () => {
  test("twoSumII([0, 1, 2, 3, 4, 5, 6, 7, 8], 9) => [1,8]", () => {
    expect(twoSumII([0, 1, 2, 3, 4, 5, 6, 7, 8], 9)).toEqual([1, 8]);
  });

  test("twoSumII([1,4,5,6,9,10,11,12], 19) => [9, 10]", () => {
    expect(twoSumII([1, 4, 5, 6, 9, 10, 11, 12], 19)).toEqual([9, 10]);
  });

  test("twoSumII([1,4,9,11,17,19,20], 3) => null", () => {
    expect(twoSumII([1, 4, 9, 11, 17, 19, 20], 3)).toEqual(null);
  });
});
