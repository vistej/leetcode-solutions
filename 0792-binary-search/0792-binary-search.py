class Solution:
    def search(self, nums: List[int], target: int) -> int:
        def bin(i, j):
            mid = (i + j) // 2
            if nums[mid] == target:
                return mid
            if mid == i or mid == j:
                return -1
            if nums[mid] < target:
                return bin(mid, j)
            else:
                return bin(i, mid)
        return bin(0, len(nums))