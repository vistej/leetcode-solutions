/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
    let i = 0;
    let j = s.length - 1;

    const res = Array.from(s);

    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    while (i < j) {

        while (i < j && !set.has(res[i])) i++;
        while (i < j && !set.has(res[j])) j--;
        const temp = res[i];
        res[i] = res[j];
        res[j] = temp;
        i++;
        j--;
    }

    return res.join('');
};