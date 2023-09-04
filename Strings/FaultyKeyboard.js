// Leetcode 2810
/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let n = s.length;
    let ans = "";

    for(let i = 0; i < n; i++) {
        if(s[i] === 'i') {
            ans = reverseString(ans);
        }
        else {
            ans += s[i];
        }
    }

    return ans;
};

let reverseString = (s) => {
    return s.split("").reduce((acc, curr) => curr + acc, "");
}