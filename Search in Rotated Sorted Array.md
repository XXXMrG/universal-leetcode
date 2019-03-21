#  Search in Rotated Sorted Array
#Algorithm/leetcode
- - - -

*NO.33*

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e.,[0,1,2,4,5,6,7]might become[4,5,6,7,0,1,2]).
You are given a target value to search. If found in the array return its index, otherwise return-1.
You may assume no duplicate exists in the array.
Your algorithm’s runtime complexity must be in the order of*O*(log*n*).

```
Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```


## Solution

将数组一分为二，其中一定有一个是有序的，另一个可能是有序，也能是部分有序。此时有序部分用二分法查找。无序部分再一分为二，其中一个一定有序，另一个可能有序，可能无序。就这样循环.


```java

class Solution {
    public int search(int[] nums, int target) {
        return search(nums, 0, nums.length - 1, target);
    }
    
    private int search(int[] nums, int low, int high, int target) {
        if (low > high)
            return -1;
        int mid = (low + high) / 2;
        if (nums[mid] == target)
            return mid;
        // 数组右侧有序
        if (nums[mid] < nums[high]) {
            // 右侧实施二分
            if (nums[mid] < target && target <= nums[high])
                return search(nums, mid + 1, high, target);
            // 不在右侧，返回左侧
            else
                return search(nums, low, mid - 1, target);
        } 
        // 数组左侧有序
        else {
            // 左侧实施二分
            if (nums[low] <= target && target < nums[mid])
                return search(nums, low, mid - 1, target);
            // 不在左侧，返回右侧
            else
                return search(nums, mid + 1, high, target);
        }
    }
}
```