// LeetCode Easy - Middle of the Linked List (Singly Linked List)

// 76ms 42.3MB
var middleNode = function (head) {
  let length = 0;
  for (let current = head; current !== null; current = current.next) {
    length++;
  }
  let current = head;
  let count = 1;
  while (count <= length / 2) {
    current = current.next;
    count++;
  }
  return current;
};

// 56ms 42.3MB
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
