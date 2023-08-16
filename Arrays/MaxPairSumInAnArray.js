// Leetcode 2815
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let map = new Map();
    let maxDigits = [];

    for(let num of nums) {
        maxDigits.push(findMaxDigit(num));
    }

    for(let i = 0; i < maxDigits.length; i++) {
        if(map.has(maxDigits[i])) {
            map.set(maxDigits[i], [...map.get(maxDigits[i]), nums[i]]);
        }
        else {
            map.set(maxDigits[i], [nums[i]]);
        }
    }

    let ans = -1;
     for(let [dig, arr] of map) {
         if(arr.length >= 2) {
             arr.sort((a, b) => b - a);
             ans = Math.max(ans, arr[0] + arr[1]);
         }
     }
    return ans;
};


let findMaxDigit = (num) => {
    let maxDig = 0;
    while(num > 0) {
        maxDig = Math.max(maxDig, num % 10);
        num = Math.floor(num / 10);
    }
    
    return maxDig;
}