class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        res = []
        def loop(ar, i, s):
            if s == target:
                res.append(list(ar))
                return
            if s > target:
                return
            for j in range(i, len(candidates)):
                if j > i and candidates[j] == candidates[j - 1]:
                    continue
                s += candidates[j]
                ar.append(candidates[j])
                loop(ar, j + 1, s)
                ar.pop()
                s -= candidates[j]
        loop([], 0, 0)
        return res