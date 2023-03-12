class Solution 
{
    //Function to reverse words in a given string.
    String reverseWords(String S) {
        int n = S.length();
        String res = "", word = "";
        
        for(int i = n - 1; i >= 0; i--) {
            char ch = S.charAt(i);
            
            if(ch != '.') {
                word = ch + word;
            }
            else {
                res += word + '.';
                word = "";
            }
        }
        
        res += word;
        
        return res;
    }
}