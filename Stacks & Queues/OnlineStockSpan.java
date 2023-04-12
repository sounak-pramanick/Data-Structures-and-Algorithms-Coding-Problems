// Leetcode 901
class StockSpanner {
    /*
    Stack<int[]> stk;
    int res;
    */
    Stack<int[]> stk;
    int ind;

    public StockSpanner() {
        /*
        stk = new Stack<>();
        res = 1;
        */
        stk = new Stack<>();
        ind = 0;
    }
    
    public int next(int price) {
        /*
        res = 1;

        while(!stk.isEmpty() && stk.peek()[0] <= price) {
            res += stk.pop()[1];
        }

        stk.push(new int[] {price, res});

        return res;
        */
        while(!stk.isEmpty() && price >= stk.peek()[0]) stk.pop();
        if(stk.isEmpty()) {
            stk.push(new int[] {price, ind++});
            return ind;
        }
        int res = ind - stk.peek()[1];
        stk.push(new int[] {price, ind++});
        return res;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner obj = new StockSpanner();
 * int param_1 = obj.next(price);
 */