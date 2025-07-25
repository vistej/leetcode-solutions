/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    const loop = (arr, i) => {
        res.push(arr);
        for (let j = i; j < nums.length; j++) {
            arr.push(nums[j]);
            loop([...arr], j + 1);
            arr.pop();
        }
    }
    loop([], 0);
    return res;
};