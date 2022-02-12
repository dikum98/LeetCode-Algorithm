// LeetCode easy - Power of Two (recursion)

// n이 2의 지수승이면 true, 아니면 false를 반환
// 72ms 43.9MB
let answer = 0;
var isPowerOfTwo = function (n) {
  if (n === 1) {
    return (answer = true);
  } else if (n < 2 && n !== 1) {
    return (answer = false);
  }
  isPowerOfTwo(n / 2);
  return answer;
};

// 82ms 44.1MB
var isPowerOfTwo = function (n) {
  return Math.log2(n) % 1 === 0;
};
