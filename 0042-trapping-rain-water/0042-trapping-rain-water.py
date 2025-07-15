class Solution:
    def trap(self, height: List[int]) -> int:
        i, j = 0, len(height) - 1
        l_max, r_max = 0, 0
        res = 0

        while i < j:
            if height[i] <= height[j]:
                if l_max < height[i]:
                    l_max = height[i]
                else:
                    res = res + l_max - height[i]
                i += 1
            else:
                if r_max < height[j]:
                    r_max = height[j]
                else:
                    res = res + r_max - height[j]
                j -= 1
        return res
        