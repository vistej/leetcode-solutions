/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const arr = speed.map((v, i) => [position[i], v]);
    arr.sort((a, b) => b[0] - a[0]);
    const res = [];
    for (let i = 0; i < speed.length; i++) {
        const time = (target - arr[i][0]) / arr[i][1];
        if (!res.length || time > res[res.length - 1]) {
            res.push(time);
        }
    }
    return res.length;
};