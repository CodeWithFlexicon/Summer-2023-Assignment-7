function removeDuplicates(nums) {
  //Using the cyclic sort algorithm, it sorts every number from 1 to n inclusive of every integer
  //Once the loop arrives at a number that we have already seen, we can then remove that number and shorten the length of the array
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

  //Using another loop we can start from the end and remove all numbers that are not in its rightful place
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] !== i + 1) {
      delete nums[i];
      nums.length--;
    }
  }

  return nums;
}

//console.log(removeDuplicates([1, 3, 7, 2, 5, 4, 6, 3]));

module.exports = removeDuplicates;
