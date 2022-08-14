const strStr = function (haystack, needle) {
  const len = haystack.length - needle.length;
  if (!needle.length || haystack === needle) return 0;
  if (haystack.length < needle.length) return -1;

  for (let i = 0; i <= len; i++) {
    let k = i,
      j = 0;
    while (haystack[k] === needle[j] && j < needle.length) k++, j++;
    if (j === needle.length) return i;
  }
  return -1;
};