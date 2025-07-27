/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    function loop(i) {
        if (i === nums.length) res.push([...nums]);
        for (let j = i; j < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            loop(i + 1);
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    loop(0);
    return res;
};