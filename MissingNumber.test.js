const missingNumber = require("./MissingNumber");

describe("missingNumber", () => {
  test("[1, 3, 5, 4] => 2", () => {
    expect(missingNumber([1, 3, 5, 4])).toEqual(2);
  });

  test("[2, 9, 7, 3, 4, 5, 6, 8] => 1", () => {
    expect(missingNumber([2, 9, 7, 3, 4, 5, 6, 8])).toEqual(1);
  });
});
