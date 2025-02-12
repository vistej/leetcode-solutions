class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        zeros = 0
        i, j = 0,0
        res = 0

        while j < len(nums):
            if nums[j] == 0:
                zeros += 1
                if zeros > k:
                    while zeros > k and i <= j:
                        zeros -= 1 if nums[i] == 0 else 0
                        i += 1

            if zeros <= k:
                res = max(res, j - i + 1)
            j += 1
                    


        return res