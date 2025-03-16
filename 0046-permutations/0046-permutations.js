/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    const res = [];

    const swap = (i, j) => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    const backtrack = (i) => {
        if (i === nums.length) {
            res.push([...nums]);
            return;
        }

        for (let j = i; j < nums.length; j++) {
            swap(i, j);
            backtrack(i + 1);
            swap(i, j);
        }
    }

    backtrack(0);
    return res;
    
};