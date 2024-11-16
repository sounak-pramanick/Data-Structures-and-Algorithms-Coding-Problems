// Leetcode 1957

class Solution {
    public String makeFancyString(String s) {
        if(s.length() < 3) return s;
        
        StringBuilder res = new StringBuilder();
        res.append(s.charAt(0)).append(s.charAt(1));

        for(int i = 2; i < s.length(); i++) {
            if((s.charAt(i) != s.charAt(i - 1)) || (s.charAt(i) != s.charAt(i - 2))) {
                res.append(s.charAt(i));
            }
        }

        return res.toString();
    }
}