class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        res = 0

        cur_alt = 0

        for g in gain:
            cur_alt += g
            res = max(res, cur_alt)
        
        return res

