// Leetcode 1582
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let specialPositionsCount = 0;
    let oneRows = [], oneCols = [];
    let m = mat.length, n = mat[0].length;

    for(let i = 0; i < m; i++) {
        let ones = 0;
        for(let j = 0; j < n; j++) {
            if(mat[i][j] === 1) ones++;
        }
        oneRows[i] = ones;
    }

    for(let j = 0; j < n; j++) {
        let ones = 0;
        for(let i = 0; i < m; i++) {
            if(mat[i][j] === 1) ones++;
        }
        oneCols[j] = ones;
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(mat[i][j] === 1 && oneRows[i] === 1 && oneCols[j] === 1) {
                specialPositionsCount++;
            }
        }
    }

    return specialPositionsCount;
};