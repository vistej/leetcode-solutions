/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const check = (node) => {
        if (!node) return [0, 0];
        const lr = check(node.left);
        const rr = check(node.right);
        if (lr[0] === 2) return lr;
        if (rr[0] === 2) return rr;
        if (lr[0] + rr[0] === 2) return [2, node];
        if (node.val === p.val || node.val === q.val) return [1 + lr[0] + rr[0], node];
        return [lr[0] + rr[0], 0];
    }
    const [_, res] = check(root);
    return res;
};