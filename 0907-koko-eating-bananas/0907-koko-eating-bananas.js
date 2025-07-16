/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const maxBan = piles.reduce((a, b) => Math.max(a, b), 0);
    let res = maxBan;
    if (h === piles.length) return res;
    function getTime(n) {
        let time = 0;
        piles.forEach(p => time += Math.ceil(p / n));
        return time;
    }
    let [i, j] = [1, maxBan];
    while (i <= j) {
        const mid = Math.floor((i + j) / 2);
        const time = getTime(mid);
        if (time <= h) {
            res = mid;
            j = mid - 1;
        } else {
            i = mid + 1;
        }
    }
    return res;
};