// LeetCode Easy - Convert Binary Number in a Linked List to Integer (Singly Linked List)

var getDecimalValue = function (head) {
  let str = "";
  let current = head;
  while (current) {
    str += current.val;
    current = current.next;
  }
  let answer = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (+str[i] === 1) {
      answer += 2 ** (str.length - i - 1);
    }
  }
  return answer;
};
