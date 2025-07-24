# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        res = [0, 0]
        def check(node):
            if res[1]:
                return
            if not node:
                return
            check(node.left)
            res[0] += 1
            if res[0] == k:
                res[1] = node.val
            check(node.right)
        check(root)
        return res[1]