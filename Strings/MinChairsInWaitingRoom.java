// Leetcode 3168

class Solution {
    public int minimumChairs(String s) {
        int count = 0, minChairs = 0;

        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(i) == 'E') count++;
            else count--;
            minChairs = Math.max(minChairs, count);
        }

        return minChairs;
    }
}