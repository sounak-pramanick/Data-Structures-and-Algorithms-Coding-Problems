class Solution {

    
    // a: input array
    // n: size of array
    // Function to find equilibrium point in the array.
    public static int equilibriumPoint(long arr[], int n) {
        long lSum = 0, totalSum = 0;
        
        for(long num : arr) {
            totalSum += num;
        }
        
        for(int i = 0; i < n; i++) {
            lSum += arr[i];
            long rSum = totalSum - lSum + arr[i];
            
            if(lSum == rSum) {
                return i + 1;
            }
        }
        
        return -1;
    }
}