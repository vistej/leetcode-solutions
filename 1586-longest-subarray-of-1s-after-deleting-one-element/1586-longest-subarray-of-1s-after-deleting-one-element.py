class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        left = right = 0
        has_zero = False

        res = 0

        for n in nums:
            if n == 1:
                if has_zero:
                    right += 1
                else:
                    left += 1
            else:
                if has_zero:
                    res = max(res, left + right)
                    left = right
                    right = 0
                else:
                    has_zero = True
        
        fr = max(res, left + right)

        return fr if fr < len(nums) else fr - 1
