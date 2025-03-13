/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxVal = Math.max(...candies);
    return candies.map(c => c + extraCandies >= maxVal);
};