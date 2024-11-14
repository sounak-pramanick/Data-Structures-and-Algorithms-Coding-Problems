// Leetcode 1446

class Solution {
    public int maxPower(String s) {
        int power = 1, res = 1;
        int i = 0, j = 1;

        while(j < s.length()) {
            if(s.charAt(i) == s.charAt(j)) {
                power++;
                res = Math.max(res, power);
            }
            else {
                i = j;
                power = 1;
            }
            j++;
        }
        
        return res;
    }
}