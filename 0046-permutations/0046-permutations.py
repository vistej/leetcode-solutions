class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []
        def loop(i):
            if i == len(nums):
                res.append(list(nums))
            for j in range(i, len(nums)):
                nums[i], nums[j] = nums[j], nums[i]
                loop(i + 1)
                nums[i], nums[j] = nums[j], nums[i]
        loop(0)
        return res