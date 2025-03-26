/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    const obj = {};
    nums.forEach(n => obj[n] = (obj[n] || 0) + 1);

    const list = Object.keys(obj).map(k => [obj[k], k]);
    list.sort((a, b) => b[0] - a[0]);

    const res = [];

    for (let i = 0; i < k; i++) {
        res.push(Number(list[i][1]));
    }

    return res;
    
};