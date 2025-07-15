/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    function gen(i, j, st) {
        if (i < n) {
            gen(i + 1, j, st + '(');
        }
        if (j < i) {
            gen(i, j + 1, st + ')')
        }
        if (j === n) {
            res.push(st);
        }
    }
    gen(0, 0, []);
    return res;
    
};