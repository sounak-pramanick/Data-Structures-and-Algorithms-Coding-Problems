class Solution
{
    public static void sort012(int a[], int n) {
        int low = 0, mid = 0, high = n - 1;
        
        while(mid <= high) {
            if(a[mid] == 0) {
                swap(a, low, mid);
                low++;
                mid++;
            }
            else if(a[mid] == 1) {
                mid++;
            }
            else {
                swap(a, mid, high);
                high--;
            }
        }
    }
    
    
    private static void swap(int arr[], int a, int b) {
        int temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
}