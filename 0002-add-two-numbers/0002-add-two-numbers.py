# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        ans = ListNode()
        res = ans
        val = 0
        while l1 or l2:
            if l1:
                val += l1.val
                l1 = l1.next
            if l2:
                val += l2.val
                l2 = l2.next
            if val > 9:
                val, n = val // 10, val % 10
                res.val = n
            else:
                res.val = val
                val = 0
            if l1 or l2:
                res.next = ListNode()
                res = res.next
            elif val:
                res.next = ListNode(val)
        return ans