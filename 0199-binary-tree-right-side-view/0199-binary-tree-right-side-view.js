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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    const res = [root.val];
    let temp = [root];
    while (temp.length) {
        const arr = [];
        for (const node of temp) {
            if (node.left) arr.push(node.left);
            if (node.right) arr.push(node.right);
        }
        if (arr.length) res.push(arr[arr.length - 1].val);
        temp = arr;
    }
    return res;
};