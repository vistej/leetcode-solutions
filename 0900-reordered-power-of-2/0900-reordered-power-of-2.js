/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const sortedNum = (n) => {
        return Array.from(n.toString()).sort((a, b) => a - b).join('');
    }
    const target = sortedNum(n);
    for (let i = 0; i < 31; i++) {
        if (sortedNum(1 << i) === target) return true;
    }
    return false;
};