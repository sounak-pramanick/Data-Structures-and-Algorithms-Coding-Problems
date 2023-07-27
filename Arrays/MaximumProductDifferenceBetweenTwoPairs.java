// Leetcode 1913
class Solution {
    public int maxProductDifference(int[] nums) {
        int n = nums.length;
        int largest = nums[0], secondLargest = Integer.MIN_VALUE;
        int smallest = nums[0], secondSmallest = Integer.MAX_VALUE;

        for(int i = 1; i < n; i++) {
            if(nums[i] > largest) {
                secondLargest = largest;
                largest = nums[i];
            }
            else if(nums[i] > secondLargest) {
                secondLargest = nums[i];
            }

            if(nums[i] < smallest) {
                secondSmallest = smallest;
                smallest = nums[i];
            }
            else if(nums[i] < secondSmallest) {
                secondSmallest = nums[i];
            }
        }

        return largest * secondLargest - smallest * secondSmallest;
    }
}