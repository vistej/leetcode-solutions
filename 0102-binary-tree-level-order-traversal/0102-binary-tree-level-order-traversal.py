# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        res = [[root.val]]
        temp = [root]
        while len(temp):
            arr = []
            tarr = []
            for node in temp:
                if node.left:
                    tarr.append(node.left)
                    arr.append(node.left.val)
                if node.right:
                    tarr.append(node.right)
                    arr.append(node.right.val)
            temp = tarr
            if len(arr):
                res.append(arr)
        return res