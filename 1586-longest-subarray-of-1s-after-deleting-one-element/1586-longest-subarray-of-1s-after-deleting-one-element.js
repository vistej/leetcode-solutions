/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const data = [0, 0];
    let cs = 0;
    let res = [0];
    for (const n of nums) {
        if (n === 0) {
            res.push(0);
            cs++;
        } else {
            res[cs]++;
        }
    }

    if (res.length === 1) return res[0] - 1;
    let ans = 0;
    for (let i = 1; i < res.length; i++) {
        ans = Math.max(ans, res[i] + res[i - 1]);
    }

    return ans;
 
    
};