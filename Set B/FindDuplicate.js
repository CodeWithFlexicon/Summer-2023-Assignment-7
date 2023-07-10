function theDuplicateFinder(nums) {
  //Using the cyclic sort algorithm, it sorts every number from 1 to n inclusive of every integer, the duplicate number will be pushed to the back
  //Knowing this, we can just return the last number in the array
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

  return nums[nums.length - 1];
}

//console.log(theDuplicateFinder([1, 3, 7, 2, 5, 4, 6, 3]));

module.exports = theDuplicateFinder;
