// Leetcode 2578
class Solution {
    public int splitNum(int num) {
        ArrayList<Integer> list = new ArrayList<>();
        int numCopy = num;
        int num1 = 0, num2 = 0;
        
        while(numCopy > 0) {
            list.add(numCopy % 10);
            numCopy /= 10;
        }

        Collections.sort(list);

        for(int i = 0; i < list.size(); i+=2) {
            num1 = num1 * 10 + list.get(i);
            if(i + 1 < list.size()) num2 = num2 * 10 + list.get(i + 1);
        }

        return num1 + num2;
    }
}