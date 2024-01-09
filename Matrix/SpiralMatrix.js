// Leetcode 54
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // Striver's solution
    /*
    let m = matrix.length;
    let n = matrix[0].length;
    let top = 0, bottom = m - 1;
    let left = 0, right = n - 1;
    let res = [];

    while(top <= bottom && left <= right) {
        for(let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;

        for(let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;

        if(top <= bottom) {
            for(let i = right; i >= left; i--) {
                res.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if(left <= right) {
            for(let i = bottom; i >= top; i--) {
                res.push(matrix[i][left]);
            }
            left++;
        }
    }

    return res;
    */

    // Another elegant solution
    let m = matrix.length;
    let n = matrix[0].length;
    let top = 0, bottom = m - 1;
    let left = 0, right = n - 1;
    let direction = 0;
    let res = [];

    while(top <= bottom && left <= right) {
        if(direction === 0) {
            for(let i = left; i <= right; i++) {
                res.push(matrix[top][i]);
            }
            top++;
        }
        else if(direction === 1) {
            for(let i = top; i <= bottom; i++) {
                res.push(matrix[i][right]);
            }
            right--;
        }
        else if(direction === 2) {
            for(let i = right; i >= left; i--) {
                res.push(matrix[bottom][i]);
            }
            bottom--;
        }
        else if(direction === 3) {
            for(let i = bottom; i >= top; i--) {
                res.push(matrix[i][left]);
            }
            left++;
        }

        direction++;
        direction %= 4;
    }

    return res;
};