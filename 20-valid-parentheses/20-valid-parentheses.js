function isValid(s) {
  const stack = [s[0]];
  const opener = ['(', '{', '['];
  const closer = [')', '}', ']'];
  if (closer.includes(stack[0])) return false;
  for (let i = 1; i < s.length; i++) {
    if (opener.includes(s[i])) stack.push(s[i]);
    else if (stack[stack.length - 1] === '{' && s[i] === '}') stack.pop();
    else if (stack[stack.length - 1] === '[' && s[i] === ']') stack.pop();
    else if (stack[stack.length - 1] === '(' && s[i] === ')') stack.pop();
    else return false;
  }
  return stack.length === 0 ? true : false;
}
