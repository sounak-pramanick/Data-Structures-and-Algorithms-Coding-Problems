// Leetcode 771

class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        int jewelsCount = 0;

        for(int i = 0; i < stones.length(); i++) {
            if(jewels.contains(String.valueOf(stones.charAt(i)))) {
                jewelsCount++;
            }
        }


        return jewelsCount;
    }
}