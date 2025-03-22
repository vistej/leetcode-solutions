/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let res = Math.max(0, gain[0]);
    for (let i = 1; i < gain.length; i++) {
        gain[i] += gain[i - 1];
        res = Math.max(res, gain[i]);
    }

    return res;
};