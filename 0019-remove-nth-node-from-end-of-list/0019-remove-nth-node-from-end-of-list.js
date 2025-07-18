/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let temp = head;
    let cnt = 0;
    while (temp) {
        cnt++;
        temp = temp.next;
    }
    let rem = cnt - n;
    temp = new ListNode(0, head);
    const res = temp;
    while (rem) {
        temp = temp.next;
        rem--;
    }
    temp.next = temp.next ? temp.next.next: null;
    return res.next;
};