class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        res, val, prev = 0, 0, 0
        for n in nums:
            if n == 0:
                res = max(res, prev + val)
                prev = val
                val = 0
            else:
                val += n
        res = max(res, prev + val)
        return min(res, len(nums) - 1)