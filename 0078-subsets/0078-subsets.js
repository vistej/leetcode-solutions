/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    const res = [[]];
    
    const loop = (i, ca) => {
        for (let j = i; j < nums.length; j++) {
            const na = Array.from(ca);
            na.push(nums[j]);
            res.push(na);
            loop(j + 1, na);
        };
    };

    loop(0, []);

    return res;
};