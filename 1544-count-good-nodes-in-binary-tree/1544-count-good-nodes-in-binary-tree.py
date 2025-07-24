# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        res = [0]
        def check(node, m):
            if not node:
                return
            if node.val >= m:
                res[0] += 1
            m = max(m, node.val)
            check(node.left, m)
            check(node.right, m)
        check(root, float('-inf'))
        return res[0]