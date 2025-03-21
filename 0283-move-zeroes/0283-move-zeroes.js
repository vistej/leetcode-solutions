/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let i = 0;
    let j = 1;

    while (i < j && j < nums.length) {
        if (nums[i] === 0 && nums[j] !== 0) {
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        if (nums[i] !== 0) {
            i++;
            j = i + 1;
        }
        if (nums[j] === 0) j++;
    }

    
};