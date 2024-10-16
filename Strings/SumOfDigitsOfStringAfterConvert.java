// Leetcode 1945

class Solution {
    public int getLucky(String s, int k) {
        String numericString = "";
        for(char ch : s.toCharArray()) {
            int characterNum = (int)(ch - 'a' + 1);
            numericString += Integer.toString(characterNum);
        }

        while(k > 0) {
            int digitSum = 0;    
            for(char ch : numericString.toCharArray()) {
                digitSum += (ch - '0');
            }
            if(digitSum < 10) return digitSum;
            numericString = Integer.toString(digitSum);
            k--;
        }

        return Integer.parseInt(numericString);
    }
}