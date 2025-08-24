/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let [res, prev, val] = [0, 0, 0];
    for (const n of nums) {
        if (n === 0) {
            res = Math.max(res, prev + val);
            prev = val;
            val = 0
        } else {
            val += n;
        }
    }
    res = Math.max(res, prev + val);
    return Math.min(res, nums.length - 1);
};