function seen(nums) {
  let big = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= nums[i + 1]) {
      big = nums[i];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == big) {
      count++;
    }
  }
  return count++;
}

console.log(seen([4, 4, 1, 3]));
