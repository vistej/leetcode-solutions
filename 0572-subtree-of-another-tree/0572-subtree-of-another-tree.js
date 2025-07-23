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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const check = (a, b) => {
        if (!a && !b) return true;
        if ((a && !b) || (!a && b)) return false;
        if (a.val !== b.val) return false;
        return check(a.left, b.left) && check(a.right, b.right);
    }
    const bfs = (node) => {
        if (!node) return false;
        if (node.val === subRoot.val && check(node, subRoot)) return true;
        return bfs(node.left) || bfs(node.right);
    }
    return bfs(root);
};