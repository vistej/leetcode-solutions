class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()

        def loop(a, i):
            res.append(a[:])
            for j in range(i, len(nums)):
                if j > i and nums[j] == nums[j - 1]:
                    continue
                a.append(nums[j])
                loop(a, j + 1)
                a.pop()
        loop([], 0)
        return res