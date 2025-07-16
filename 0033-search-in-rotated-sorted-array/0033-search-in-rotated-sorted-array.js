/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const n = nums.length;

    function bin(i, j) {
        const mid = Math.floor((i + j) / 2);
        if (nums[mid] === target) return mid;
        if (i > j) return -1;
        if (nums[mid] >= nums[i]) {
            if (nums[i] <= target && target <= nums[mid]) {
                return bin(i, mid - 1);
            } else {
                return bin(mid + 1, j);
            }
        } else {
            if (nums[mid] <= target && target <= nums[j]) {
                return bin(mid + 1, j);
            } else {
                return bin(i, mid - 1);
            }
        }
    }
    return bin(0, n - 1);
};