/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */


var gcdOfStrings = function(str1, str2) {

    const GCD = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    }
    const gcd = GCD(str1.length, str2.length);
    let i = 0;
    if (str1.length % gcd || str2.length % gcd) return '';
    const str = str1.slice(i, gcd);
    while (i < str1.length) {
        if (str1.slice(i, i + gcd) !== str) return '';
        i += gcd;
    }
    i = 0;
    while (i < str2.length) {
        if (str2.slice(i, i + gcd) !== str) return '';
        i += gcd;
    }

    return str1.slice(0, gcd);
};