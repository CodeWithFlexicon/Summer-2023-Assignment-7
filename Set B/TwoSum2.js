function twoSumII(nums, target) {
  //Since the array is already sorted, I do not think we need the cyclic sort and I'm not sure how to solve this with
  //Cyclic sort or fast/slow pointers only
  //We can have a two pointer solution where the pointers start on either end
  let left = 0;
  let right = nums.length - 1;

  //We can create a loop until the right pointer meets the left pointer
  //If the two pointers at their respective indices, have values that add up to the target
  //We can return the two numbers
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [nums[left], nums[right]];
    } else if (target > sum) {
      left++;
    } else {
      right--;
    }
  }

  //If we can't find any numbers that add up to the target, return null
  return null;
}

console.log(twoSumII([0, 1, 2, 3, 4, 5, 6, 7, 8], 9));

module.exports = twoSumII;
