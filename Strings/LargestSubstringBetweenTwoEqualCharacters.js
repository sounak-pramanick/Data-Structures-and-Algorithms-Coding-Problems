// Leetcode 1624
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let n = s.length;
    
    if(n <= 1) return -1;

    const firstIndexMap = new Map();
    let maxLength = -1;
    
    for(let i = 0; i < n; i++) {
        let letter = s.charAt(i);

        if(!firstIndexMap.has(letter)) firstIndexMap.set(letter, i);
        else maxLength = Math.max(maxLength, i - firstIndexMap.get(letter) - 1);
    }

    return maxLength;
};