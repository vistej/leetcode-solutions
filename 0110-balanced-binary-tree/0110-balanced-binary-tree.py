# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def check(node):
            if not node:
                return (0, True)
            left, lres = check(node.left)
            right, rres = check(node.right)
            if not lres or not rres:
                return (0, False)
            if abs(left - right) > 1:
                return (0, False)
            return (1 + max(left, right), True)
        _, res = check(root)
        return res