// Leetcode 2833
/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let lCount = 0, rCount = 0, underscoreCount = 0, n = moves.length;

    for(let i = 0; i < n; i++) {
        if(moves[i] === 'L') lCount++;
        else if(moves[i] === 'R') rCount++;
        else underscoreCount++;
    }

    if(lCount > rCount) {
        return lCount + underscoreCount - rCount;
    }
    else if(rCount > lCount) {
        return rCount + underscoreCount - lCount;
    }
    return underscoreCount;
};