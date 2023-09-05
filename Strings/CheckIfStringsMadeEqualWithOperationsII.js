// Leetcode 2840
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function(s1, s2) {
    const n = s1.length;
    const evenPlaceCount = new Map(), oddPlaceCount = new Map();

    for(let i = 0; i < n; i++) {
        if(i % 2 === 0) {
            if(!evenPlaceCount.has(s1[i])) evenPlaceCount.set(s1[i], 1);
            else evenPlaceCount.set(s1[i], evenPlaceCount.get(s1[i]) + 1);
        }
        else {
            if(!oddPlaceCount.has(s1[i])) oddPlaceCount.set(s1[i], 1);
            else oddPlaceCount.set(s1[i], oddPlaceCount.get(s1[i]) + 1);
        }
    }

    for(let i = 0; i < n; i++) {
        if(i % 2 === 0) {
            if(evenPlaceCount.has(s2[i])) evenPlaceCount.set(s2[i], evenPlaceCount.get(s2[i]) - 1);
            else return false;
        }
        else {
            if(oddPlaceCount.has(s2[i])) oddPlaceCount.set(s2[i], oddPlaceCount.get(s2[i]) - 1);
            else return false;
        }
    }

    for(let [key, value] of evenPlaceCount) {
        if(value > 0) return false;
    }

    for(let [key, value] of oddPlaceCount) {
        if(value > 0) return false;
    }

    return true;
};