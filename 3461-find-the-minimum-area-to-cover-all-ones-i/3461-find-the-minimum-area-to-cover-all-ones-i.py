class Solution:
    def minimumArea(self, grid: List[List[int]]) -> int:
        row_sum = [sum(a) for a in grid]
        col_sum = [sum([grid[j][i] for j in range(len(grid))]) for i in range(len(grid[0]))]
        res = 1
        i, j = 0, len(row_sum) - 1
        while i < j:
            while row_sum[i] == 0:
                i += 1
            while row_sum[j] == 0:
                j -= 1
            res *= j - i + 1
            break
        i, j = 0, len(col_sum) - 1
        while i < j:
            while col_sum[i] == 0:
                i += 1
            while col_sum[j] == 0:
                j -= 1
            res *= j - i + 1
            break
        return res
        