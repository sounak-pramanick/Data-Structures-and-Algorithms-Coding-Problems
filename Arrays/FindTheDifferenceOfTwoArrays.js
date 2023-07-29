// Leetcode 2215
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const answer1 = [], answer2 = [];
    const set = new Set();

    for(let i of nums2) set.add(i);
    for(let i of nums1) {
        if(!set.has(i) && !answer1.includes(i)) answer1.push(i);
    }

    set.clear();

    for(let i of nums1) set.add(i);
    for(let i of nums2) {
        if(!set.has(i) && !answer2.includes(i)) answer2.push(i);
    }

    return [answer1, answer2];
};