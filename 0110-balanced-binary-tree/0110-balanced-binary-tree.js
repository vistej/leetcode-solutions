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
var isBalanced = function(root) {
    const check = (node) => {
        if (!node) return [0, true];
        const [left, lres] = check(node.left);
        const [right, rres] = check(node.right);
        if (!lres || !rres) return [0, false];
        if (Math.abs(left - right) > 1) return [0, false];
        return [1 + Math.max(left, right), true];
    }
    const [_, res] = check(root);
    return res;
};