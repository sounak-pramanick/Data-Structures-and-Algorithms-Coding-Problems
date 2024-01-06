// Leetcode 2428
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function(grid) {
    let m = grid.length, n = grid[0].length;
    let res = 0;

    for(let i = 0; i < m - 2; i++) {
        for(let j = 0; j < n - 2; j++) {
            let topRow = grid[i][j] + grid[i][j + 1] + grid[i][j + 2];
            let middle = grid[i + 1][j + 1];
            let bottomRow = grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2];
            res = Math.max(res, topRow + middle + bottomRow);
        }
    }

    return res;
};