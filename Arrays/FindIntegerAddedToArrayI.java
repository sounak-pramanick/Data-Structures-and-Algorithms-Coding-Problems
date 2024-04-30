// Leetcode 3131

class Solution {
    public int addedInteger(int[] nums1, int[] nums2) {
        int n = nums1.length;
        int min1 = nums1[0], min2 = nums2[0];

        for(int i = 1; i < n; i++) {
            if(nums1[i] < min1) min1 = nums1[i];
            if(nums2[i] < min2) min2 = nums2[i];
        }

        return min2 - min1;
    }
}