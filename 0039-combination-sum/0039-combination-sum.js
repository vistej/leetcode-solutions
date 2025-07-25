/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    function loop(ar, i, s) {
        if (s === target) {
            res.push(Array.from(ar));
            return;
        }
        if (s > target) return;
        for (let j = i; j < candidates.length; j++) {
            ar.push(candidates[j]);
            s += candidates[j];
            loop(ar, j, s);
            ar.pop();
            s -= candidates[j];
        }
    }
    loop([], 0, 0);
    return res;
};