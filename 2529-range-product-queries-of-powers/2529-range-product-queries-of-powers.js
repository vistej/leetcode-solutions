/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function(n, queries) {
    const powers = [];
    while (n) {
        const b = n & -n;
        powers.push(b);
        n ^= b;
    }

    const res = [];
    for (const [x, y] of queries) {
        let val = 1;
        for (let i = x; i < y + 1; i++) {
            val *= powers[i];
        }
        res.push(val % (10**9 + 7));
    }
    return res;
};