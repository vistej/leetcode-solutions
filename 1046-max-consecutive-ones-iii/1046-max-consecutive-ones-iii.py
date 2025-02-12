class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        i, j = 0, 0

        while j < len(nums):
            if nums[j] == 0:
                k -= 1
            if k < 0:
                k += 1 if nums[i] == 0 else 0
                i += 1
            j += 1
        
        return j - i