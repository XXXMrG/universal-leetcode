# Find Peak Element
#Algorithm/leetcode
- - - -

*NO.162*

A peak element is an element that is greater than its neighbors.
Given an input arraynums, wherenums[i] ≠ nums[i+1], find a peak element and return its index.
The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
You may imagine thatnums[-1] = nums[n] = -∞.

```
**Example 1:**
**Input:** **nums** = [1,2,3,1]
**Output:** 2
**Explanation:** 3 is a peak element and your function should return the index number 2.
**Example 2:**
**Input:** **nums** = [1,2,1,3,5,6,4]
**Output:** 1 or 5 
**Explanation:** Your function can return either index number 1 where the peak element is 2, 
            or index number 5 where the peak element is 6.
```

**Note:**
Your solution should be in logarithmic complexity.


## Solution

```java
/**
* @Date:2019年3月19日
* 确保lo->lo+1 , hi-1<-hi这两个方向是上升趋势，必然在lo和hi之间存在峰
*/
class Solution {
    public int findPeakElement(int[] nums) {
    	int lo = -1, hi = nums.length;
    	int mid;
    	while(true) {
    		if(hi-lo == 2)
    			return lo + 1;
    		mid = (lo+hi) / 2;
    		if(nums[mid]<nums[mid+1])
    			lo = mid;
    		else
    			hi = mid + 1;
    	}
    }
}
```