/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function(n, x) {
    const powers = [];
    let i = 1;
    while (true) {
        const pow = i ** x;
        if (pow > n) break;
        powers.push(pow);
        i++;
    }
    const dp = Array.from({length: n + 1}).fill(0);
    dp[0] = 1;
    for (const p of powers) {
        for (let i = n; i > p - 1; i--) {
            dp[i] = (dp[i] + dp[i - p]) % (10**9 + 7);
        }
    }
    return dp[n];
};