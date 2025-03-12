/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

    const res = [];

    const maxLen = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLen; i++) {
        if (i < word1.length) res.push(word1[i]);
        if (i < word2.length) res.push(word2[i]);
    };

    return res.join('');
    
};