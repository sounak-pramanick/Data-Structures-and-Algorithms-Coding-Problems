/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function(n, k) {
    let nums = [];
    const set = new Set();
    let i = 1, sum = 0;

    while(nums.length < n) {
        if(!set.has(k - i)) {
            nums.push(i);
            set.add(i);
            
            sum += i;
        }
        
        i++;
    }

    return sum;
};