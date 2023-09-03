// Leetcode 2843
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count = 0;
    
    for(let num = low; num <= high; num++) {
        num = num.toString();
        
        if(num.length % 2 === 0) {
            let i = 0, j = num.length - 1;
            let sum1 = 0, sum2 = 0;

            while(i < j) {
                sum1 += Number(num[i]);
                sum2 += Number(num[j]);

                i++;
                j--;
            }
            
            if(sum1 === sum2) count++;
        }
    }

    
    return count;
};