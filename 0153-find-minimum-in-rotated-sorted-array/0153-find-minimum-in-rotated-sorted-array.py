class Solution:
    def findMin(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]
        def bin(i, j):
            mid = (i + j) // 2
            left = mid - 1 if mid > 0 else n - 1
            right = mid + 1 if mid < n - 1 else 0
            if nums[left] > nums[mid] and nums[right] > nums[mid]:
                return nums[mid]
            if nums[mid] > nums[n - 1]:
                return bin(mid + 1, j)
            else:
                return bin(i, mid - 1)
        return bin(0, n - 1)