class Solution:
    def productQueries(self, num: int, queries: List[List[int]]) -> List[int]:
        powers = []
        while num:
            lowBit = num & -num
            powers.append(lowBit)
            num ^= lowBit

        res = []
        for x, y in queries:
            val = 1
            for i in range(x, y + 1):
                val *= powers[i]
            res.append(val % (10 ** 9 + 7))
        return res
        