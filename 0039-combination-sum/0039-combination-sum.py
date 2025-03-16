class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:

        res = []
        checked = set()

        def backtrack(ca, s):
            for c in candidates:
                if s + c == target:
                    na = ca + [c]
                    na.sort()
                    st = ''.join(map(str, na))
                    if st not in checked:
                        res.append(na)
                        checked.add(st)
                elif s + c < target:
                    backtrack(ca + [c], s + c)
        
        backtrack([], 0)

        return res
        