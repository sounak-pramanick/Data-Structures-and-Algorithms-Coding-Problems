/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let n = nums.length;
    let max = nums.reduce((acc, curr) => {
      acc = Math.max(acc, curr);
      return acc;
    }, Number.MIN_SAFE_INTEGER);

    if(n !== max + 1) return false;

    const map = new Map();
    
    for(let i = 0; i < n; i++) {
      if(!map.has(nums[i])) map.set(nums[i], 1);
      else map.set(nums[i], map.get(nums[i]) + 1);
    }

    for(let [key, value] of map) {
      if(value > 1 && key !== max) return false;
      if(value > 2 && key === max) return false;
    }

    return true;
};

/*
Edge cases - 

a) [5,1,2,2,5,1]

b) [2,2,2]

 */