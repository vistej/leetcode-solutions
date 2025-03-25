/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        const left = target - nums[i];
        if (obj.hasOwnProperty(left)) {
            return [obj[left], i]
        }
        obj[nums[i]] = i
    }

    
};