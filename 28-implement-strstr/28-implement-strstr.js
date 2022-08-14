const strStr = function (haystack, needle) {
  let len = haystack.length;
  let needleLen = needle.length;
  for (let i = 0; i < len; i++) {
    if (haystack.slice(i, i + needleLen) === needle) return i;
  }
  return -1;
}