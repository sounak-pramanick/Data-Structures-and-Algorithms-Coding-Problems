// Leetcode 1897
/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    let n = words.length;
    
    if(n === 0) return true;

    const characterCountMap = new Map();

    words.map(word => {
        for(let i = 0; i < word.length; i++) {
            let letter = word.charAt(i);
            
            if(!characterCountMap.has(letter)) characterCountMap.set(letter, 1);
            else characterCountMap.set(letter, characterCountMap.get(letter) + 1);
        }
    });

    for(let [key, value] of characterCountMap.entries()) {
        if(value % n !== 0) return false;
    }

    return true;
};