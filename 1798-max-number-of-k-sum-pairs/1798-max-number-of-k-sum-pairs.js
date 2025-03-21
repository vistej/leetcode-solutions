/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {

    const map = new Map();
    let res = 0;

    for (const n of nums) {
        const e = k - n;

        const val = map.get(e);

        if (val !== undefined && val > 0) {
            res++;
            map.set(e, val - 1);
        } else {
            map.set(n, (map.get(n) || 0) + 1);
        }
    }

    return res;
    
};