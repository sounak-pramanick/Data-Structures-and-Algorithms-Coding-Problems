// Leetcode 42
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length, amountOfWater = 0;
    const maxLeftArr = [], maxRightArr = [];
    let maxLeft = height[0], maxRight = height[n - 1];
    maxLeftArr[0] = height[0], maxRightArr[n - 1] = height[n - 1];

    for(let i = 1; i < n; i++) {
        if(height[i] > maxLeft) {
            maxLeft = height[i];
        }
        maxLeftArr[i] = maxLeft;
    }

    for(let i = n - 2; i >= 0; i--) {
        if(height[i] > maxRight) {
            maxRight = height[i];
        }
        maxRightArr[i] = maxRight;
    }

    console.log(maxLeftArr)
    console.log(maxRightArr)

    for(let i = 0; i < n; i++) {
        amountOfWater += (Math.min(maxLeftArr[i], maxRightArr[i]) - height[i]);
    }

    return amountOfWater;
};