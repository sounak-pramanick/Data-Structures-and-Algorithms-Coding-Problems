// Leetcode 2849
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    let diffx = Math.abs(fx - sx);
    let diffy = Math.abs(fy - sy);

    if(diffx === 0 && diffy === 0 && t === 1) return false;

    let diag = Math.min(diffx, diffy);
    let straight = Math.abs(diffx - diffy);

    if(diag + straight <= t) return true;
    
    return false;
};