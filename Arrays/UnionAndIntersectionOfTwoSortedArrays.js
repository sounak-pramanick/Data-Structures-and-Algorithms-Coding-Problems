/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var unionAndIntersection = function(nums1, nums2) {
    let n1 = nums1.length, n2 = nums2.length;
    let union = [], intersection = [];
    let i = 0, j = 0;

    while(i < n1 && j < n2) {
        if(nums1[i] <= nums2[j]) {
            if(union.length === 0 || union[union.length - 1] !== nums1[i]) {
                union.push(nums1[i]);
            }
            i++;
        }
        else {
            if(union.length === 0 || union[union.length - 1] !== nums2[j]) {
                union.push(nums2[j]);
            }
            j++;
        }
    }

    while(i < n1) {
        if(union.length === 0 || union[union.length - 1] !== nums1[i]) {
            union.push(nums1[i]);
        }
        i++;
    }

    while(j < n2) {
        if(union.length === 0 || union[union.length - 1] !== nums2[j]) {
            union.push(nums2[j]);
        }
        j++;
    }

    i = 0;
    j = 0;
    
    while(i < n1 && j < n2) {
        if(nums1[i] === nums2[j]) {
            if(intersection.length === 0 || intersection[intersection.length - 1] !== nums1[i]) intersection.push(nums1[i]);
            i++;
            j++;
        }
        else {
            if(nums1[i] < nums2[j]) i++;
            else j++;
        }
    }

    return [union, intersection];
};
