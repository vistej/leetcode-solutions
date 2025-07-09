/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    numSet = new Set();

    for (const n of nums) {
        if (numSet.has(n)) return true;
        numSet.add(n);
    }

    return false;
    
};