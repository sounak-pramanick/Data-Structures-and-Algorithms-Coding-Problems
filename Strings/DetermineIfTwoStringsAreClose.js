// Leetcode 1657
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    let n1 = word1.length, n2 = word2.length;
    if(n1 != n2) return false;

    const freq1 = [], freq2 = [];
    const chars1 = new Set(), chars2 = new Set();

    for(let i = 0; i < 26; i++) {
        freq1[i] = 0;
        freq2[i] = 0;
    }

    for(let i = 0; i < n1; i++) {
        freq1[word1[i].charCodeAt() - 97]++;
        freq2[word2[i].charCodeAt() - 97]++;

        chars1.add(word1[i]);
        chars2.add(word2[i]);
    }

    freq1.sort((a, b) => a - b);
    freq2.sort((a, b) => a - b);

    for(let i = 0; i < 26; i++) {
        if(freq1[i] !== freq2[i]) return false;
    }

    for(let val of chars1.values()) {
        if(!chars2.has(val)) return false;
    }


    return true;
};