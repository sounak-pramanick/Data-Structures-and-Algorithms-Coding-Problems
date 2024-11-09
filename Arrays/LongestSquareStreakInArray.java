// Leetcode 2501

class Solution {
    public int longestSquareStreak(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        for(int num : nums) {
            set.add(num);
        }
        
        int max = -1, count;
        for(int num : nums) {
            long curr = num;
            count = 0;
            while(set.contains((int)curr)) {
                count++;
                if(curr * curr > 1e5) break;
                curr *= curr;
            }
            max = Math.max(max, count);
        }
        return max == 1? -1 : max;
    }
}