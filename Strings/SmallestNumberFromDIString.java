// Leetcode 2375
class Solution {
    public String smallestNumber(String pattern) {
        // This is the code I implemented by myself, after seeing Lee's explanation
        /*
        int n = pattern.length();
        int arr[] = new int[n + 2];
        int size = arr.length;
        String res = "";
        int start = 1, end = 1;

        for(int i = 0; i < size; i++) {
            arr[i] = i;
        }

        for(int i = 0; i < n; i++) {
            if(pattern.charAt(i) == 'I') {
                reverseArr(arr, start, i + 1);
                start = (i + 1) + 1;
            }
        }

        if(start < size) {
            reverseArr(arr, start, size - 1);
        }

        for(int i : arr) res += i;

        return res.substring(1);
        */



        // This code is from Pepcoding, this is better
        Stack<Integer> stk = new Stack<>();
        int num = 1;
        String res = "";

        for(int i = 0; i < pattern.length(); i++) {
            if(pattern.charAt(i) == 'D') {
                stk.push(num);
                num++;
            }
            else {
                stk.push(num);
                num++;

                while(!stk.isEmpty()) {
                    res += stk.pop();
                }
            }
        }

        stk.push(num);
        while(!stk.isEmpty()) {
            res += stk.pop();
        }

        return res;
    }



    // This is the code I implemented by myself, after seeing Lee's explanation
    /*
    private static void reverseArr(int arr[], int start, int end) {
        while(start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    */
}