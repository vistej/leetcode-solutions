/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const [m, n] = [matrix.length, matrix[0].length];
    function bin(row, i, j) {
        const mid = Math.floor((i + j) / 2);
        if (target === matrix[row][mid]) return true;
        if (mid === i || mid === j) return false;
        if (matrix[row][mid] < target) {
            return bin(row, mid, j);
        } else {
            return bin(row, i, mid);
        }
    }
    for (let i = 0; i < m; i++) {
        if (target < matrix[i][0]) return false;
        if (target > matrix[i][n - 1]) continue;
        return bin(i, 0, n);
    }
    return false;
};