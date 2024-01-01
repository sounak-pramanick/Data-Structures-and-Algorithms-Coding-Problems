// Leetcode 455
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let childrenLength = g.length;
    let cookieLength = s.length;

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let i = 0, j = 0, contentChildren = 0;

    while(i < childrenLength && j < cookieLength) {
        if(s[j] >= g[i]) {
            contentChildren++;
            i++;
            // j++;
        }
        // else {
        //     j++;
        // }

        j++;
    }

    return contentChildren;
};


/*
Examples I thought:-

// g - 1 4 5
// s - 4 5

// g - 2 3 4
// s - 1 3

// g - 3 4
// s - 1 2 3 4

 */