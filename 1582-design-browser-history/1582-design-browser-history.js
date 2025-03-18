/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = [homepage];
    this.ci = 0;

    
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    if (this.ci !== this.history.length - 1) {
        this.history = this.history.slice(0, this.ci + 1);
    }
    this.history.push(url);
    this.ci++;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    
    if (this.ci - steps > 0) {
        this.ci -= steps;
    } else {
        this.ci = 0;
    }

    return this.history[this.ci];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    if (this.ci + steps < this.history.length) {
        this.ci += steps;
    } else {
        this.ci = this.history.length - 1;
    }
    return this.history[this.ci];
    
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */