function strStr(haystack, needle) {
  let len = haystack.length - needle.length;
  for (let i = 0; i <= len; i++) {
    if (haystack.slice(i, i + needle.length) === needle) return i;
  }
  return -1;
}