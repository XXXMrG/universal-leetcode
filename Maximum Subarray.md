# Maximum Subarray
#Algorithm/leetcode
- - - -
*NO.53*

> Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.  

Examples:

```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

Follow up:

> If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.  

## First idea
一道非常常见的 dp 入门级题目，可以比较清晰的体现出 dp 的思想，即问题分治简化处理，最后子问题回归求解原问题。

问题的主要解法其实就是 dp 保存当前最大连续子序列和，之后如果当前最大值小于 0 ，我们就重新开始一个新的子序列，并且保存之前那个，并令两者的最大值为新的最大连续子序列和，该问题 dp 要点在于子问题分解是基于当前序列最后一个元素的。想清楚这点就很容易明白。

有趣的是该问题的最有名的解法是由 Kadane 一位卡内基梅隆大学的教授最早提出的，也是用了相同的思想。

该算法根据具体实现语言特性不同各有不同，有的可能很简洁，但是基本思想都是相同的。

## Solulation

```python
class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        maxsum = nums[0]
        maxhere = nums[0]
        for i in range(1, len(nums)):
            if maxsum >= 0:
                maxsum += nums[i]
            else:
                maxsum = nums[i]
            maxhere = max(maxhere, maxsum)
        
        return maxhere
```


```java
class Solution {
    public int maxSubArray(int[] nums) {
        int n = nums.length;
        int[] dp = new int[n];
        dp[0] = nums[0];
        int max = dp[0];
        for (int i = 1; i < n; i++){
            dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
            max = Math.max(max, dp[i]);
        }
        return max;
    }
}
```

```python
class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        for i in range(1, len(nums)):
                if nums[i-1] > 0:
                    nums[i] += nums[i-1]
        return max(nums)
```

## About Algorithm
dp 第一步
❤️
