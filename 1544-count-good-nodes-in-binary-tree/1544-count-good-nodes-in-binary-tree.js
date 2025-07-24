/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let res = 0;
    const check = (node, m) => {
        if (!node) return
        if (node.val >= m) res++;
        m = Math.max(m, node.val);
        check(node.left, m);
        check(node.right, m);
    }
    check(root, -Infinity);
    return res;
};