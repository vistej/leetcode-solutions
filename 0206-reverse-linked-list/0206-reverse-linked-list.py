# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head
        next = None
        while head.next:
            temp = head.next
            head.next = next
            next = head
            head = temp
        head.next = next
        return head