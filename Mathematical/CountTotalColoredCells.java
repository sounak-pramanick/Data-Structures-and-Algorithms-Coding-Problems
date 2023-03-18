// Leetcode 2579
class Solution {
    public long coloredCells(int n) {
        long res = 1 + 2 * (long)n * (long)(n - 1);
        return res;
    }
}