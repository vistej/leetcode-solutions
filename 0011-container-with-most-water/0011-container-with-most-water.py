class Solution:
    def maxArea(self, height: List[int]) -> int:
        res = 0
        i = 0
        j = len(height) - 1

        while i < j:
            h1 = height[i]
            h2 = height[j]
            area = min(h1, h2) * (j - i)
            res = max(area, res)
            if h1 < h2:
                i += 1
            else:
                j -= 1
        return res