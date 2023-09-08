// Leetcode 1768
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const n1 = word1.length, n2 = word2.length;
    let i = 0, j = 0;
    let merged = "";

    while(i < n1 && j < n2) {
        merged += word1[i] + word2[j];
        i++;
        j++;
    }

    while(i < n1) {
        merged += word1[i];
        i++;
    }

    while(j < n2) {
        merged += word2[j];
        j++;
    }

    return merged;
};