/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let temp = new ListNode();
    const res = temp;
    while (list1 || list2) {
        while (list1 && (!list2 || list1.val <= list2.val)) {
            temp.next = list1;
            list1 = list1.next;
            temp = temp.next;
        }
        while (list2 && (!list1 || list2.val <= list1.val)) {
            temp.next = list2;
            list2 = list2.next;
            temp = temp.next;
        }
    }
    return res.next;
};