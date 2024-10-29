// Leetcode 1233

class Solution {
    public List<String> removeSubfolders(String[] folder) {
        Arrays.sort(folder);
        
        List<String> res = new ArrayList<>();
        res.add(folder[0]);
        String curr = folder[0];
        
        for(int i = 1; i < folder.length; i++) {
            if(!folder[i].startsWith(curr + "/")) {
                res.add(folder[i]);
                curr = folder[i];
            }
        }

        return res;
    }
}