class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:

        res = []

        def backtrack(i, ca, s):
            for j in range(i, len(candidates)):
                if s + candidates[j] == target:
                    na = ca + [candidates[j]]
                    res.append(na)
                elif s + candidates[j] < target:
                    backtrack(j, ca + [candidates[j]], s + candidates[j] )
        
        backtrack(0, [], 0)

        return res
        