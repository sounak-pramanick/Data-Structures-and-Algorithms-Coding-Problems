// Leetcode 2390

class Solution {
    public String removeStars(String s) {
        String res = "";
        Stack<Character> stk = new Stack<>();

        for(int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            
            if(ch == '*') {
                stk.pop();
            }
            else {
                stk.push(ch);
            }
        }

        while(!stk.isEmpty()) {
            res = stk.pop() + res;
        }
        
        return res;
    }
}