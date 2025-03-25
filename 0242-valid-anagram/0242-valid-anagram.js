/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1 );
    }

    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) return false;
        const val = map.get(t[i]);
        if (val > 1) map.set(t[i], val - 1);
        else map.delete(t[i]);
    }

    return map.size === 0;
};