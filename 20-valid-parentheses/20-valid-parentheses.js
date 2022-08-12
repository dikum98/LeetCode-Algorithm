function isValid(s) {
  const stack = [s[0]];
  const parentheses = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  for (let i = 1; i < s.length; i++) {
    const curr = s[i];
    // s의 현재 요소가 여는 괄호인 경우
    if (!parentheses[curr]) stack.push(curr);
    // 닫는 괄호 짝이 맞는 경우
    else if (stack[stack.length - 1] === parentheses[curr]) stack.pop();
    else return false;
  }
  return stack.length === 0 ? true : false;
}