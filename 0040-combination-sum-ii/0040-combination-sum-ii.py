class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        candidates.sort()

        def backtrack(i, ca, s):
            if s == target:
                res.append(ca.copy())
                return
            if s > target:
                return
            
            for j in range(i, len(candidates)):
                if j > i and candidates[j] == candidates[j - 1]:
                    continue
                ca.append(candidates[j])
                backtrack(j + 1, ca, s + candidates[j])
                ca.pop()
        

        backtrack(0, [], 0)

        return res
        