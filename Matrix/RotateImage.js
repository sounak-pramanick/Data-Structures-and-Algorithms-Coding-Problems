// Leetcode 48
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    let i = 0, j = n - 1;

    while(i < j) {
        let temp = matrix[i];
        matrix[i] = matrix[j];
        matrix[j] = temp;
        i++;
        j--;
    }

    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
};