# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def check(node, m, n):
            if not node:
                return True
            if (node.val >= m) or (node.val <= n):
                return False
            left = check(node.left, node.val, n)
            right = check(node.right, m, node.val)
            return left and right
        return check(root, float('inf'), float('-inf'))