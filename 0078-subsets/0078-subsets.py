class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = [[]]

        def loop(i, ca):
            for j in range(i, len(nums)):
                na = ca.copy();
                na.append(nums[j])
                res.append(na)
                loop(j + 1, na)

        loop(0, [])
        
        return res
