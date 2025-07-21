/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    const map = new Map();
    let i = 0;
    let temp = head;
    const res = new _Node(null, null, null);
    let tempres = res;
    while (temp) {
        const node = new _Node(temp.val, null, null);
        tempres.next = node;
        map.set(temp, node);
        tempres = tempres.next;
        temp = temp.next;
    }
    tempres = res.next;
    while (head) {
        const random = head.random;
        if (random !== null) {
            tempres.random = map.get(random);
        }
        head = head.next;
        tempres = tempres.next;
    }
    return res.next;
};