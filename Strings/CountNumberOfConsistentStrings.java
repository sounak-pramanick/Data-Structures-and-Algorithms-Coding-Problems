// Leetcode 1684

class Solution {
    public int countConsistentStrings(String allowed, String[] words) {
        int res = 0;

        for(String word : words) {
            boolean isConsistent = true;

            for(char ch : word.toCharArray()) {
                if(!allowed.contains(String.valueOf(ch))) {
                    isConsistent = false;
                    break;
                }
            }
            if(isConsistent) res++;
        }

        return res;
    }
}