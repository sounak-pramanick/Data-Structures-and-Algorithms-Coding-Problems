// Leetcode 997
class Solution {
    public int findJudge(int n, int[][] trust) {
        int visited[] = new int[n + 1];
        Arrays.fill(visited, 1);

        for(int i = 0; i < trust.length; i++) {
            visited[trust[i][0]] = 0;
        }

        int potentialCandidate = 0;

        for(int i = 1; i < n + 1; i++) {
            if(visited[i] == 1) {
                potentialCandidate = i;
                break;
            }
        }

        if(potentialCandidate == 0) return -1;

        Arrays.fill(visited, 1);
        visited[potentialCandidate] = 0;

        for(int i = 0; i < trust.length; i++) {
            if(trust[i][1] == potentialCandidate) {
                visited[trust[i][0]] = 0;
            }
        }

        for(int i = 1; i < n + 1; i++) {
            if(visited[i] == 1) return -1;
        }

        return potentialCandidate;
    }
}