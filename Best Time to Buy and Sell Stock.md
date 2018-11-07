# Best Time to Buy and Sell Stock
#Algorithm/leetcode
- - - -
*NO.121*

> Say you have an array for which the ith element is the price of a given stock on day i.  
>   
> If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.  
>   
> Note that you cannot sell a stock before you buy one.  

Example:

```
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```


## First idea
dp，肯定是动态规划，因为每一个可能的购买股票的价格所对应的剩余的数组的元素都是不同的，也就是说每一个购入价对应一个抛售价，我们要通过动态规划找出这个最大差值。


## Solulation
事实证明你想多了，这个题远远还不需要动态规划出手，但是解题思路中也算是包含了动态规划的思想。

### 暴力法

老规矩，暴力法解决一切问题，但是 python3 会在第 199 个测试用例时超时，因此该方法不能通过

两次遍历，对于数组中每个元素都求出与之对应的最大利润，然后返回最大值。

```python
class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        length = len(prices)
        maxn = 0
        for i in range(0, length):
            for j in range(i, length):
                if prices[j] - prices[i] > maxn:
                    maxn = prices[j] - prices[i]
        return maxn
```

*复杂度分析*

时间复杂度：O(n ^ 2) 双重遍历数组

空间复杂度：O(1) 只有一个临时变量


### 只需要一次遍历的方法

我们要解决的问题很简单，就是找出一个数组中峰值和谷值的最大差值且要保证峰值出现在谷值之后，看张图

![](Best%20Time%20to%20Buy%20and%20Sell%20Stock/CDEA506E-2741-40B1-8753-A37E5BFEFAD8.png)

![5be2c2d9558f2.png](https://i.loli.net/2018/11/07/5be2c2d9558f2.png)


```python

class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        minprice = float("inf")
        maxprofit = 0
        for i in range(0, len(prices)):
            if prices[i] < minprice:
                minprice = prices[i]
            elif prices[i] - minprice > maxprofit:
                maxprofit = prices[i] - minprice
        
        return maxprofit
```

*复杂度分析*

时间复杂度：O(n) 只需要遍历一次数组

空间复杂度：O(1) 只有两个临时变量


## About Algorithm

最开始想到的解决方案是使用最长不减子序列来动态规划，想的有点复杂，但是要时刻保持着一个 dp 的心 ❤️


