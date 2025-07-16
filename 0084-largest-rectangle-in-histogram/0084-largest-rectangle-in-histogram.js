/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = heights[0];
    const stack = [-1];
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 1 && heights[i] <= heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width); 
        }
        stack.push(i);
    }
    while (stack.length > 1) {
        const height = heights[stack.pop()];
        const width = heights.length - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
    }
    return maxArea;
};