/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

    const res = [];

    candidates.sort((a, b) => a - b);

    const backtrack = function(i, ca, s) {
        if (s === target) {
            res.push([...ca]);
            return;
        }

        if (s > target) return;

        for (let j = i; j < candidates.length; j++) {
            if (j > i && candidates[j] === candidates[j - 1]) continue;
            ca.push(candidates[j]);
            backtrack(j + 1, ca, s + candidates[j]);
            ca.pop();
        }
    }

    backtrack(0, [], 0);

    return res;
    
};