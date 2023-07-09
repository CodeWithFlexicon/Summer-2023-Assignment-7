function duplicatesFinder(nums) {
  //Using the same cyclic sort algorithm, we can sort the array in an ascending order
  //Create an array to hold duplicate numbers so we can return the array
  //We can then start from the end of the array since all the duplicate numbers are pushed to the back of the array through the cyclic sort
  const result = [];

  let currIndex = 0;
  while (currIndex < nums.length) {
    const value = nums[currIndex];
    const correctIndex = value - 1;
    if (value !== nums[correctIndex]) {
      [nums[currIndex], nums[correctIndex]] = [
        nums[correctIndex],
        nums[currIndex],
      ];
    } else {
      currIndex++;
    }
  }

  //Here we create a loop from the end of the array going towards the front but once we reach a number that is correctly in place, we can just break out of the array
  //All the numbers that are already duplicates will not be placed in the array twice using the result.includes function
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] !== i + 1 && !result.includes(nums[i])) {
      result.push(nums[i]);
    } else {
      break;
    }
  }

  return result;
}

//console.log(duplicateFinder([1, 2, 3, 3, 4, 5, 1, 4, 7, 9, 6, 8]));

module.exports = duplicatesFinder;
