// LeetCode Easy - Linked List Cycle (Singly Linked List)

// 69ms 44.8MB
var hasCycle = function (head) {
  let count = 0;
  let current = head;
  while (count < 10001) {
    if (!current) break;
    current = current.next;
    count++;
  }
  return count > 10000 ? true : false;
};

// 94ms 44.8MB
var hasCycle = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head;
  while (slow.next && fast.next?.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
