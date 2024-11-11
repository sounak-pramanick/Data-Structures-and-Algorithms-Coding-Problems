// Leetcode 1662

class Solution {
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
        List<Character> word1Chars = new ArrayList<Character>();
        List<Character> word2Chars = new ArrayList<Character>();

        for(String word : word1) {
            for(char letter : word.toCharArray()) {
                word1Chars.add(letter);
            }
        }
        for(String word : word2) {
            for(char letter : word.toCharArray()) {
                word2Chars.add(letter);
            }
        }
        
        if(word1Chars.size() != word2Chars.size()) return false;

        for(int i = 0; i < word1Chars.size(); i++) {
            if(word1Chars.get(i) != word2Chars.get(i)) return false;
        }
        return true;
    }
}