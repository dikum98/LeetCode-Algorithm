const strStr = function (haystack, needle) {
  let len = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + len) === needle) return i;
  }
  return -1;
}