function missingNumber(nums) {
  //Using a cyclic sort we can sort all the numbers
  //The problem however is when it finds a number that is greater than the array length, the original algorithm does not know what to do and it breaks
  //Causing the array to suddenly contain an undefined
  //So once we find the number that is bigger than the array length, we can skip that number and sort the rest and run through the sorted array and check if all the numbers match the progression
  let currIndex = 0;

  //Loop through the array until the end of the array
  while (currIndex < nums.length) {
    //Set a variable to contain the current number at the current index
    const value = nums[currIndex];

    //Have a variable contain the correctIndex for that value so if we have the value 5, we should be placed at index 4
    const correctIndex = value - 1;

    //Check if the value is less than the length of the array and that the value is not equal to the value at the correct index
    if (value < nums.length && value !== nums[correctIndex]) {
      [nums[currIndex], nums[correctIndex]] = [
        nums[correctIndex],
        nums[currIndex],
      ];
    } else {
      //Once swapped, we should check the currentIndex again so we should not increment until we find a number that is greater than the length or is a value in the correct location
      currIndex++;
    }
  }

  //Comb through the array again until we find a number that is not in the correct location, the number missing should be the index + 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length;
}

module.exports = missingNumber;
