/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
    const res = [];

    function backtrack(i, ca, s) {
        if (s === target) {
            res.push([...ca]);
            return;
        }
        if (s > target) return;
        for (let j = i; j < candidates.length; j++) {
            const ns = s + candidates[j];
            ca.push(candidates[j]);
            backtrack(j, ca, ns);
            ca.pop();
        }
    }

    backtrack(0, [], 0);

    return res;
};