/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (!s) return true;
    let i = 0;
    let j = 0;

    if (t.length < s.length) return false;

    while (j < t.length) {
        if (t[j] === s[i]) i++;
        if (i === s.length) return true;
        j++;
    }

    return false;
};