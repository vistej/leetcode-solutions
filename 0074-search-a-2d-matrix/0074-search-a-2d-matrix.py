class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m, n = len(matrix), len(matrix[0])
        def bin(row, i, j):
            mid = (i + j) // 2
            if target == matrix[row][mid]:
                return True
            if mid == i or mid == j:
                return False
            if matrix[row][mid] < target:
                return bin(row, mid, j)
            else:
                return bin(row, i, mid)
        for i in range(m):
            if target < matrix[i][0]:
                return False
            if target > matrix[i][-1]:
                continue
            return bin(i, 0, n)
        return False