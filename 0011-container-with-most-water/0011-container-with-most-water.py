class Solution:
    def maxArea(self, height: List[int]) -> int:
        start, end = 0, len(height) - 1
        res = 0

        while start < end:
            area = min(height[start], height[end]) * (end - start)
            res = max(res, area)
            if height[start] < height[end]:
                start += 1
            else:
                end -= 1
        
        return res