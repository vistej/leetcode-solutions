/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let i = 0;
    let j = height.length - 1;
    let max_area = 0;

    while (i < j) {
        const area = Math.min(height[i], height[j]) * (j - i);
        max_area = Math.max(area, max_area);
        if (height[i] < height[j]) i++
        else j--;
    }

    return max_area;
    
};