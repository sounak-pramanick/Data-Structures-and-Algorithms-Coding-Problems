// Leetcode 2748
class Solution {
    public int countBeautifulPairs(int[] nums) {
        int n = nums.length;
        int res = 0;

        for(int i = 0; i < n - 1; i++) {
            int firstDigit = getFirstDigit(nums[i]);

            for(int j = i + 1; j < n; j++) {
                if(gcd(firstDigit, nums[j] % 10) == 1) res++;
            }
        }

        return res;
    }


    private static int getFirstDigit(int num) {
        // this is also right but will take more time
        /*
        while(num > 9) {
            num /= 10;
        }

        return num;
        */

        String str = Integer.toString(num);
        return str.charAt(0) - '0';
    }

    private static int gcd(int num1, int num2) {
        while(num2 % num1 != 0) {
            int rem = num2 % num1;
            num2 = num1;
            num1 = rem;
        }

        return num1;
    }
}