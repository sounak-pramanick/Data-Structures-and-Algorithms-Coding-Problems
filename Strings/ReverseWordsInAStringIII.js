// Leetcode 557
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let n = s.length;
    let res = "", word = "";

    for(let i = n - 1; i >= 0; i--) {
        if(s.charAt(i) === ' ') {
            res = word + " " + res;
            word = "";
        }
        else word += s.charAt(i);
    }
    res = word + " " + res;

    return res.slice(0, n);
};