/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let i = 0;
    let j = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let res = 0;

    while (i < j) {
        if (height[i] <= height[j]) {
            if (leftMax < height[i]) {
                leftMax = height[i];
            } else {
                res += (leftMax - height[i]);
            }
            i++;
        } else {
            if (rightMax < height[j]) {
                rightMax = height[j];
            } else {
                res += (rightMax - height[j]);
            }
            j--;
        }
    }
    return res;
};