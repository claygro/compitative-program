let arr = [1, 3, 5, 7, 9];
let min = 0;
let max = 0;
for (let i = 0; i < arr.length - 1; i++) {
  min = min + arr[i];
}
for (let j = 1; j < arr.length; j++) {
  max = max + arr[j];
}
console.log(min);
console.log(max);
