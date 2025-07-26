/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const res = [];
    candidates.sort((a, b) => a - b);
    function loop(ar, i, s) {
        if (s === target) {
            res.push(Array.from(ar));
            return;
        }
        if (s > target) return;
        for (let j = i; j < candidates.length; j++) {
            if (j > i && candidates[j] === candidates[j - 1]) continue;
            ar.push(candidates[j]);
            s += candidates[j];
            loop(ar, j + 1, s);
            ar.pop();
            s -= candidates[j];
        }
    }

    loop([], 0 , 0);
    return res;
};