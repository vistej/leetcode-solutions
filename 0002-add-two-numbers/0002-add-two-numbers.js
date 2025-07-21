/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const ans = new ListNode();
    let res = ans;
    let val = 0;
    while (l1 || l2) {
        if (l1) {
            val += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            val += l2.val;
            l2 = l2.next;
        }
        if (val > 9) {
            const n = val % 10;
            val = Math.floor(val / 10);
            res.val = n;
        } else {
            res.val = val;
            val = 0;
        }
        if (l1 || l2) {
            res.next = new ListNode();
            res = res.next;
        } else if (val) {
            res.next = new ListNode(val);
        }
    }
    return ans;
};