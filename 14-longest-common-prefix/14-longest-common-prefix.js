function longestCommonPrefix(strs) {
  let prefixx = '';
  // if (strs.length === 1) return strs[0];
  if (strs.includes('')) return '';

  let i = 0;
  while (i < strs[0].length) {
    if (strs.some((word) => word[i] !== strs[0][i])) return prefixx;
    prefixx += strs[0][i];
    i++;
  }

  return prefixx;
}