/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const oa = {};
    const ob = {};
    for (let i = 0; i < t.length; i++) {
        oa[t[i]] = (oa[t[i]] || 0) + 1;
    }
    const res = new Map();
    const st = new Set();
    const rc = Object.keys(oa).length;
    let i = 0;
    for (let j = 0; j < s.length; j++) {
        ob[s[j]] = (ob[s[j]] || 0) + 1;
        if (s[j] in oa && ob[s[j]] === oa[s[j]]) {
            st.add(s[j]);
        }
        if (st.size === rc) {
            while (i < s.length && (!oa[s[i]] || ob[s[i]] > oa[s[i]])) {
                ob[s[i]] -= 1;
                i += 1;
            }
            res.set((j - i), [i, j]);
        }
    }
    if (res.size) {
        const minVal = Math.min(...res.keys());
        const [i, j] = res.get(minVal);
        return s.slice(i, j + 1);
    }
    return '';
};