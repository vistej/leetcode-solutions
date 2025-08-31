/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    function loop(a, i) {
        res.push([...a]);
        for (let j = i; j < nums.length; j++) {
            if (j > i && nums[j] === nums[j - 1]) continue;
            a.push(nums[j]);
            loop(a, j + 1);
            a.pop()

        }
    }

    loop([], 0);
    return res;
};