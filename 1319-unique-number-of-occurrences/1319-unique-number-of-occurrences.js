/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();

    for (const n of arr) {
        map.set(n, (map.get(n) || 0) + 1);
    }

    const set = new Set();
    for (const x of map.values()) {
        if (set.has(x)) return false;
        set.add(x);
    }

    return true;
};