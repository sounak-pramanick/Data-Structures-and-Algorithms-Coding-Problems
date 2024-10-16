// Leetcode 2938

class Solution {
    public long minimumSteps(String s) {
        long zeroCount = 0, ans = 0;

        for(int i = s.length() - 1; i >= 0; i--) {
            if(s.charAt(i) == '0') zeroCount++;
            else ans += zeroCount;
        }

        return ans;
    }
}