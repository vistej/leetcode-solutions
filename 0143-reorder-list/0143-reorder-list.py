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
        arr = []
        temp = head.next
        while temp:
            arr.append(temp.val)
            temp = temp.next
        temp = head.next
        i = 0
        j = len(arr) - 1
        while temp:
            temp.val = arr[j]
            j -= 1
            temp = temp.next
            if temp:
                temp.val = arr[i]
                i += 1
                temp = temp.next
        
        return head