// Leetcode 2530

class Solution {
    public long maxKelements(int[] nums, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        long score = 0;

        for(int num : nums) {
            pq.add(num);
        }

        for(int i = 0; i < k; i++) {
            score += pq.peek();
            int num = pq.poll();
            pq.add((int)(Math.ceil(num / 3.0))); 
        }

        return score;
    }
}