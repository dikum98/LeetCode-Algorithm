// 9. Palindrome Number

function isPalindrome(x) {
  if (x < 0) return false;

  x = (x + '').split('');

  for (let i = 0; i < x.length / 2; i++) {
    if (x[i] !== x[x.length - 1 - i]) return false;
  }
  return true;
}

// unsolved
function isPalindrome(x) {
  if (x < 0) return false;

  let len = x.toString().length;

  if (len === 1) return true;

  for (let i = 10; i <= 10 ** Math.floor(len / 2); i *= 10) {
    if (x % i !== Math.floor(x / (10 ** len / i))) return false;
    x -= x % i;
  }

  return true;
}
