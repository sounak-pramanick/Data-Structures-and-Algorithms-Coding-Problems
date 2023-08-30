// Leetcode 2825
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    let i = 0, j = 0;

    while(i < str1.length && j < str2.length) {
        if(str1[i] === str2[j] || String.fromCharCode(str1[i].charCodeAt(0) + 1) === str2[j] || String.fromCharCode(str1[i].charCodeAt(0) - 25) === str2[j]) {
            j++;
        }

        i++;
    }

    return j === str2.length;
};