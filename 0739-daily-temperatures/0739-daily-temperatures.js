/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const res = Array(temperatures.length).fill(0);
    let stack = [temperatures.length - 1];
    for (let i = temperatures.length - 2; i >= 0; i--) {
        let days = 0;
        while (stack.length) {
            const last = stack.pop();
            if (temperatures[i] >= temperatures[last]) {
                days++;
            } else {
                stack.push(last)
                res[i] = last - i;
                break;
            }
        }
        stack.push(i);
    }

    return res;
};