"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        hmap = {}
        temp = head
        res = Node(0)
        tres = res
        while temp:
            node = Node(temp.val)
            hmap[temp] = node
            tres.next = node
            tres = tres.next
            temp = temp.next
        tres = res.next
        while head:
            if head.random:
                tres.random = hmap[head.random]
            head = head.next
            tres = tres.next
        return res.next

