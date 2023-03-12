class Solution 
{ 
    String firstRepChar(String s) {
        // without using hashmap
        int arr[] = new int[26];
        
        for(int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            
            if(arr[ch - 'a'] == 0) {
                arr[ch - 'a']++;
            }
            else {
                return String.valueOf(ch);
            }
        }
        
        return "-1";
    }
}
