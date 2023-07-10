function missingNumbers(nums) {
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

    //Check if the value is not equal to the value at the correct index and place into correct index
    //Since array is missing values, JavaScript will replace the missing numbers with undefined/empty items
    if (value !== nums[correctIndex]) {
      [nums[currIndex], nums[correctIndex]] = [
        nums[correctIndex],
        nums[currIndex],
      ];
    } else {
      //If value is at correctIndex, we can move to the next value
      currIndex++;
    }
  }

  const result = [];
  //Comb through the array again, checking to see which indices are undefined, or not equal to its supposed value
  //We then place the values missing into an array containing the results
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      result.push(i + 1);
    }
  }

  return result;
}

//console.log(missingNumbers([1, 9, 5, 4]));

module.exports = missingNumbers;
