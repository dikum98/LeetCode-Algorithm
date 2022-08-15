const lengthOfLastWord = function (s) {
  let len = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (len !== 0) return len;
      continue;
    }
    len++;
  }
  return len;
};