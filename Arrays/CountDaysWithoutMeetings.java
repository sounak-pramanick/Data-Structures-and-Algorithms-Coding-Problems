// Leetcode 3169

class Solution {
    public int countDays(int days, int[][] meetings) {
        Arrays.sort(meetings, (a,b) -> a[0] - b[0]);
        int count = 0, last = meetings[0][1], n = meetings.length;
        count += meetings[0][0] - 1;

        for(int i = 0; i < n - 1; i++) {
            if(meetings[i + 1][0] - last > 1) {
                count += meetings[i + 1][0] - last - 1;
            }
            last = Math.max(last, meetings[i + 1][1]);
        }
        
        last = Math.max(last, meetings[n - 1][1]);
        count += days - last;

        return count;
    }
}


// [[1,48],[2,9],[3,49],[3,31],[21,56],[23,44],[23,52],[26,55]]