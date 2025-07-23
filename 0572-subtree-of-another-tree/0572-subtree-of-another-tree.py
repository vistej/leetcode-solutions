# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        def check(a, b):
            if not a and not b:
                return True
            if (a and not b) or (not a and b):
                return False
            if (a.val != b.val):
                return False
            return check(a.left, b.left) and check(a.right, b.right)
        def bfs(node):
            if not node:
                return False
            if (node.val == subRoot.val):
                if check(node, subRoot):
                    return True
            return bfs(node.left) or bfs(node.right)
        return bfs(root)