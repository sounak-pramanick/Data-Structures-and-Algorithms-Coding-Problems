// Leetcode 3304

class Solution {
    public char kthCharacter(int k) {
        String word = "a", res = "a";
        
        while(word.length() < k) {
            for(int i = 0; i < word.length(); i++) {
                if(word.charAt(i) == 'z') {
                    res += "a";
                    continue;
                }
                res += Character.toString((int)(word.charAt(i)) + 1);
            }
            word = res;
        }

        return word.charAt(k - 1);
    }
}