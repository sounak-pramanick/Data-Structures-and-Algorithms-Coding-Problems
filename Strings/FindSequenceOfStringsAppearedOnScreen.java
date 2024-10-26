// Leetcode 3324

class Solution {
    public List<String> stringSequence(String target) {
        List<String> res = new ArrayList<>();
        String word = "";
        
        for(char ch : target.toCharArray()) {
            for(char c = 'a'; c <= ch; c++) {
                res.add(word+String.valueOf(c));
            }
            word += ch;
        }
        return res;
    }
}