function longestCommonPrefix(strs) {
  let prefixx = '';
  if (strs.length === 1) return strs[0];
  if (strs.includes('')) return '';

  for (let i = 0; i < strs[0].length; i++) {
    if (strs.some((word) => word[i] !== strs[0][i])) return prefixx;
    prefixx += strs[0][i];
  }

  return prefixx;
}