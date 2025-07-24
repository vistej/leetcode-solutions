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
 * @return {boolean}
 */
var isValidBST = function(root) {
    const check = (node, m, n) => {
        if (!node) return true;
        if (node.val >= m || node.val <= n) return false;
        const left = check(node.left, node.val, n);
        const right = check(node.right, m, node.val);
        return left && right;
    }
    return check(root, Infinity, -Infinity);
};