function romanToInt(s) {
  let answer = 0;
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    if (romanNumerals[s[i]] < romanNumerals[s[i + 1]]) {
      answer = answer + romanNumerals[s[i + 1]] - romanNumerals[s[i]];
      i++;
    } else answer += romanNumerals[s[i]];
  }

  return answer;
}