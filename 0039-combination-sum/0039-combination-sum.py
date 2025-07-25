class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        def loop(ar, i, s):
            if s == target:
                res.append(list(ar))
            if s > target:
                return
            for j in range(i, len(candidates)):
                ar.append(candidates[j])
                s += candidates[j]
                loop(ar, j, s)
                ar.pop()
                s -= candidates[j]
        loop([], 0, 0)
        return res