/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = [...Array(9)].map(() => new Set());
    const cols = [...Array(9)].map(() => new Set());
    const boxes = [...Array(9)].map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const val = board[i][j];
            const bi = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            if (val === '.') continue;
            if (rows[i].has(val) || cols[j].has(val) || boxes[bi].has(val)) return false;
            rows[i].add(val);
            cols[j].add(val);
            boxes[bi].add(val);
        }
    }

    return true;
};