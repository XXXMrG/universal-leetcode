# House Robber
#Algorithm/leetcode
- - - -
*NO.198*

> You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.  
>   
> Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.  

Examples:

```
Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.

Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
```


## First idea
dp 问题，先找 dp 规律，然后用变量记住前一次结果，最优化结果。
对于小偷来说，对于每一个数组的元素都有两种选择，偷或者是不偷。
* 如果偷了，那么当前的利益就是 当前数组元素值 nums[i] + 偷了前前个数组元素得到的战利品。
* 如果没偷，那么当前的利益就是之前的利益不变，并且当前值成为新的前前个战利品总和。

这样一来我们就找到了问题的关键，接下来就是找到合适的遍历方式，可以选用递归或是直接遍历，递归要更好理解问题，但是效率不如直接遍历。

同时我们保存两个值，当前利益和前前个利益作为 memo.

## Solulation
递归和直接遍历时间复杂度都为线型级别，递归由于用到了堆栈和一个数组会更耗费空间。


```python
class Solution:
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) == 0:
            return 0
        prev1 = 0
        prev2 = 0
        for item in nums:
            tmp = prev1
            prev1 = max(prev2 + item, prev1)
            prev2 = tmp
        return prev1
```

```java
int[] memo;
public int rob(int[] nums) {
    memo = new int[nums.length + 1];
    Arrays.fill(memo, -1);
    return rob(nums, nums.length - 1);
}

private int rob(int[] nums, int i) {
    if (i < 0) {
        return 0;
    }
    if (memo[i] >= 0) {
        return memo[i];
    }
    int result = Math.max(rob(nums, i - 2) + nums[i], rob(nums, i - 1));
    memo[i] = result;
    return result;
}
```

## About

LeetCode 上有一个评论对该问题和如何解决动态规划问题给出了很好的解答。

[House Robber - LeetCode](https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems.)