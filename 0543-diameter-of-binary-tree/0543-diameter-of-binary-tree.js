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
var diameterOfBinaryTree = function(root) {
    function bfs(node) {
        if (!node) return [0, 0];
        const [lmax, lres] = bfs(node.left);
        const [rmax, rres] = bfs(node.right);
        return [1 + Math.max(lmax, rmax), Math.max(lres, rres, lmax + rmax)];
    }
    const [_, res] = bfs(root);
    return res;
};