function seen(nums) {
  let str = nums.toString();
  return str.split("").reverse().join("");
}

console.log(seen([1, 2, 4, 5]));
