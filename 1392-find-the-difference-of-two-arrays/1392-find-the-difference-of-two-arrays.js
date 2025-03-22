/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    for (const n of set2) {
        if (set1.has(n)) {
            set1.delete(n);
            set2.delete(n);
        }
    }

    return [Array.from(set1), Array.from(set2)];
};