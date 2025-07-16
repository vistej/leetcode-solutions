
var TimeMap = function() {
    this.obj = {}
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.obj[key]) this.obj[key] = [];
    this.obj[key].push([timestamp, value]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const keys = this.obj[key] || [];
    let [i, j] = [0, keys.length - 1];
    let res = "";
    while (i <= j) {
        const mid = Math.floor((i + j) / 2);
        if (keys[mid][0] <= timestamp) {
            res = keys[mid][1];
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    return res;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */