// LeetCode Easy - Concatenation of Array

// 99ms, 45.1MB
var getConcatenation = function (nums) {
  return nums.concat(nums);
};

// 88ms, 45.2MB
var getConcatenation = function (nums) {
  let concatenation = [...nums];
  for (let i = 0; i < nums.length; i++) {
    concatenation.push(nums[i]);
  }
  return concatenation;
};
