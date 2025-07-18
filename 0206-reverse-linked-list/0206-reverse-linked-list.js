/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return head;
    let next = null;
    while (head.next) {
        const temp = head.next;
        head.next = next;
        next = head;
        head = temp;
    }
    head.next = next;
    return head;
};