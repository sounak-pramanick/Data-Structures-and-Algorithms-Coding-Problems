// Leetcode 2785
/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let str = s.split("");
    let n = str.length;
    const map = new Map();

    fillMapWithVowelsAndFrequencies(map);
    
    for(let i = 0; i < n; i++) {
        if(isVowel(str[i], map)) {
            map.set(str[i], map.get(str[i]) + 1);
        }
    }

    for(let i = 0; i < n; i++) {
        if(isVowel(str[i], map)) {
            for(let [key, value] of map) {
                if(value > 0) {
                    str[i] = key;
                    value--;
                    map.set(key, value);
                    break; // it ensures that once it replaces vowel, it doesn't keep on continuing
                }
            }
        }
    }

    return str.join("");
};



const fillMapWithVowelsAndFrequencies = (map) => {
    map.set("A", 0);
    map.set("E", 0);
    map.set("I", 0);
    map.set("O", 0);
    map.set("U", 0);
    map.set("a", 0);
    map.set("e", 0);
    map.set("i", 0);
    map.set("o", 0);
    map.set("u", 0);
}

const isVowel = (ch, map) => {
    // this is traditional way of checking vowel
    // return (ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
    //        || ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u');


    // thought of this approach, since map already contains all vowels
    return map.has(ch);
}