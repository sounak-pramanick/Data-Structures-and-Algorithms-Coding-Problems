// Leetcode 2125
/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let n = bank.length;
    if(n <= 1) return 0;

    let totalBeams = 0, prev = 0;

    for(let i = 0; i < n; i++) {
        let row = bank[i];
        let countDevices = 0;

        for(let j = 0; j < row.length; j++) {
            if(row.charAt(j) === '1') countDevices++;
        }

        if(countDevices) {
            totalBeams += (prev * countDevices);
            prev = countDevices;
        }
    }

    return totalBeams;
};