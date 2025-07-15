/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    const res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const target = -nums[i];
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[j] + nums[k];
            if (sum === target) {
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                while (j < nums.length && nums[j] === nums[j - 1]) {
                j++;
                }
                k = nums.length - 1;
            } else if (sum > target) k--;
            else j++;
        }
    }


    return res;

};