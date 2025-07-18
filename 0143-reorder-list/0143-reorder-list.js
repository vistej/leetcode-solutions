/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let mid = slow.next;
    slow.next = null;
    let cnode = mid;
    let prev = null;
    while (cnode) {
        const temp = cnode.next;
        cnode.next = prev;
        prev = cnode;
        cnode = temp;
    }
    while (prev) {
        const temp = head.next;
        head.next = prev;
        prev = prev.next;
        head = head.next;
        head.next = temp;
        head = head.next;
    }
};