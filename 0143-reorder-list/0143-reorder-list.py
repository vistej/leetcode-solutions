# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        fast = head
        slow = head
        while fast and fast.next and fast.next.next:
            fast = fast.next.next
            slow = slow.next
        mid = slow.next
        slow.next = None
        cnode = mid
        prev = None
        while cnode:
            temp = cnode.next
            cnode.next = prev
            prev = cnode
            cnode = temp
        dummy = head
        while prev:
            tail = dummy.next
            dummy.next = prev
            dummy = dummy.next
            prev = prev.next
            dummy.next = tail
            dummy = dummy.next
        
        
        