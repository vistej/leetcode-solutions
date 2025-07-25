class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []
        def loop(ar, i):
            res.append(ar)
            for j in range(i, len(nums)):
                ar.append(nums[j])
                loop(copy.deepcopy(ar), j + 1)
                ar.pop()
        loop([], 0)
        return res