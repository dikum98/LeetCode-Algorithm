// LeetCode easy - Reverse String (Recursion)

// 137ms 51.1MB
var reverseString = function (s, start = 0) {
  if (start >= s.length / 2) return;
  [s[start], s[s.length - start - 1]] = [s[s.length - start - 1], s[start]];
  reverseString(s, start + 1);
};

// 132ms 51.2MB
var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;
  const reverse = (start, end) => {
    if (start >= end) return;
    [s[start], s[end]] = [s[end], s[start]];
    reverse(start + 1, end - 1);
  };
  reverse(start, end);
};
