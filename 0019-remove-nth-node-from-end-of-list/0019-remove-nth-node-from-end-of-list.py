# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:

        temp = head;
        cnt = 0;
        while temp:
            cnt += 1
            temp = temp.next
        rem = cnt - n
        temp = ListNode(0, head)
        res = temp
        while rem:
            temp = temp.next
            rem -= 1
        temp.next = temp.next.next if temp.next else None
        return res.next