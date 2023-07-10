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

  //console.log(nums);

  //Using another loop, we can check if the numbers are in their respective indexes
  //If they are not, we can replace the values with null
  //If they are in their respective spots, we can move them to the front
  //Set a variable to find an index that does not have the correct number
  let uniqueIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      nums[i] = null; // Mark duplicates with null
    } else {
      if (i !== uniqueIndex) {
        /*         
        console.log("Curr Array: ", nums);
        console.log(
          "Curr Num: ",
          nums[i],
          "Unique Index Num: ",
          nums[uniqueIndex]
        ); */
        [nums[i], nums[uniqueIndex]] = [nums[uniqueIndex], nums[i]]; // Move unique numbers to the index where there was an incorrect value
      }
      uniqueIndex++;
    }
  }

  //Set the length of the array to the last index where we moved the unique number
  nums.length = uniqueIndex;

  return nums.length;
}

//console.log(removeDuplicates([1, 3, 7, 2, 5, 4, 6, 3]));
//console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 5, 5, 5, 5, 7, 7, 7]));

module.exports = removeDuplicates;
