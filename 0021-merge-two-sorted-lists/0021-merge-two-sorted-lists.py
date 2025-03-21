# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:

        head = ListNode()
        temp = head

        while (list1 or list2):
            if list1 and (not list2 or list1.val <= list2.val):
                temp.next = list1
                list1 = list1.next
                temp = temp.next
            if list2 and (not list1 or list2.val < list1.val):
                temp.next = list2
                list2 = list2.next
                temp = temp.next
            
        return head.next
        