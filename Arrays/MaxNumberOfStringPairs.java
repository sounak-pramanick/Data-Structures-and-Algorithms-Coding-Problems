// Leetcode 2744
class Solution {
    public int maximumNumberOfStringPairs(String[] words) {
        HashSet<String> hs = new HashSet<>();
        int countPairs = 0;
        
        for(String s : words) hs.add(s);
        
        for(String s : words) {
            hs.remove(s); // removing so that palindrome strings are not counted eg: "zz"

            if(hs.contains(reverse(s))) {
                countPairs++;
                hs.remove(reverse(s));
            }
        }

        return countPairs;
    }


    private static String reverse(String s) {
        String reverseWord = "" + s.charAt(1) + s.charAt(0); // "" is added to convert to string
        return reverseWord;
    }
}