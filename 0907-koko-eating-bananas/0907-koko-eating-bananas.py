class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        max_ban = max(piles)
        res = max_ban

        if h == len(piles):
            return max_ban

        def getTime(n):
            time = 0
            for p in piles:
                time = time + ceil(p / n)
            return time

        i, j = 1, max_ban

        while i <= j:
            mid = (i + j) // 2
            time = getTime(mid)
            if time <= h:
                res = mid
                j = mid - 1
            else:
                i = mid + 1
        return res