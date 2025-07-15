/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {'(': ')', '{': '}', '[': ']'};
    const stack = [];
    for (const c of Array.from(s)) {
        if (c in obj) {
            stack.push(c);
        } else {
            if (!stack.length) return false;
            const key = stack.pop();
            if (obj[key] !== c) return false;
        }
    }
    return stack.length === 0;
    
};