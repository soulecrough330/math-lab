function sum squares(nums) {
  return nums.reduce((acc, num) => acc + num * num, 0);
}
console.log(sumSquares([1, 2, 3])); // Output: 14
