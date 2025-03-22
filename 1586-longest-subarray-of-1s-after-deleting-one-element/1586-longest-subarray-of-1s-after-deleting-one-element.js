/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const data = [0, 0];
    let cs = 0;
    let res = 0;
    for (const n of nums) {
        if (n === 1) {
            data[cs]++;
        } else {
            cs++;
            if (cs > 1) {
                res = Math.max(res, data[0] + data[1]);
                data[0] = data[1];
                data[1] = 0;
                cs = 1;
            }
        }
    }

    res = Math.max(res, data[0] + data[1]);

    if (res === nums.length) res--;

    return res;
    
};