/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const obj = {};

    for (let i = 0; i < strs.length; i++) {
        const str = Array.from(strs[i]).sort((a, b) => a.localeCompare(b)).join('');
        if (!obj.hasOwnProperty(str)) {
            obj[str] = [];
        }
        obj[str].push(strs[i]);
    }

    return Array.from(Object.values(obj))
};