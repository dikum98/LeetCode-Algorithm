const strStr = function (haystack, needle) {
  const len = haystack.length - needle.length;
  if (!needle.length || haystack === needle) return 0;
  if (haystack.length < needle.length) return -1;

  for (let i = 0; i <= len; i++) {
    let haystackStart = i,
      needleStart = 0;
    while (haystack[haystackStart] === needle[needleStart] && needleStart < needle.length) haystackStart++, needleStart++;
    if (needleStart === needle.length) return i;
  }
  return -1;
};