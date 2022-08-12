function isValid(s) {
  const stack = [];
  const parentheses = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  for (const curr of s) {
    if (!parentheses[curr]) stack.push(curr);
    else if (stack[stack.length - 1] === parentheses[curr]) stack.pop();
    else return false;
  }
  return !stack.length ? true : false;
}