// LeetCode easy - Fibonacci Number (recursion, iteration)

// 76ms 42MB recursion
var fib = function (n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  if (n > 2) return fib(n - 1) + fib(n - 2);
};

// 82ms 42.1MB iteration
var fib = function (n) {
  if (n <= 1) return n;
  let a = 0;
  let b = 1;
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return sum;
};
