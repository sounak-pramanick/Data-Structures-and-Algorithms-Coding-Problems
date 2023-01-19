class Solution{
    int carpetBox(int A, int B, int C, int D) {
        // checking the minimum of the two as we are allowed to rotate by 90deg, so ...
        // ... we can interchange length and breadth
        return Math.min(minMoves(A, B, C, D), minMoves(B, A, C, D));
    }
    
    
    int minMoves(int A, int B, int C, int D) {
        int moves = 0;
        
        while(A > C || B > D) {  // any one getting smaller will be okay
            if(A > C) {
                A /= 2;
                moves++;
            }
            if(B > D) {
                B /= 2;
                moves++;
            }
        }
        
        return moves;
    }
}