# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        res = [root.val]
        temp = [root]
        while len(temp):
            arr = []
            for node in temp:
                if node.left:
                    arr.append(node.left)
                if node.right:
                    arr.append(node.right)
            if len(arr):
                res.append(arr[-1].val)
            temp = arr
        return res    