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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0;
    let res = 0;
    const check = (node) => {
        if (res) return;
        if (!node) return;
        check(node.left);
        count++;
        if (count === k) res = node.val;
        check(node.right);
    }
    check(root);
    return res;
};