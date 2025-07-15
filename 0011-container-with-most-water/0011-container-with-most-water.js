/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0;
    let [i, j] = [0, height.length - 1];
    while (i < j) {
        const h1 = height[i];
        const h2 = height[j];
        const area = Math.min(h1, h2) * (j - i);
        res = Math.max(res, area);
        if (h1 < h2) {
            i++;
        } else j--;
    }
    return res;
};