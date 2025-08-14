/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    const nums = Array.from(num);
    let count = 1;
    let res = "";
    let cn = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        if (count === 3 && cn <= Number(nums[i])) {
            cn = Number(nums[i]);
            res = num.slice(i - 2, i + 1);
            }
    }
    return res;
};