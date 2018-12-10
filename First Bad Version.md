# First Bad Version
#Algorithm/leetcode
- - - -
*NO.278*

> You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all   
> the versions after a bad version are also bad.  
>   
> Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.  
>   
> You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.  

Example:
```
Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version. 
```


## First idea
二分查找呗，人家都给你排好序了。

> 没有程序猿能写出没有 bug 的二分。  

二分查找最容易出现的错误就是数组越界，也就是二分的过程中中间值处理不当。
本题中要查找第一个出错的版本，那么也就是说结果的前面的版本都是正确的，结果的后面的版本都是错误的。本题数组从下标从一开始，注意越界处理。
二分流程即为：
* 当前中值为正确的，结果值在后半部分
* 当前中值为错误的，结果值在前半部分
* 找到结果值时 low 会超过或等于 high 且 mid 等于最后一个正确的版本。

## Solution

```python

# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
# def isBadVersion(version):

class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        low = 1
        high = n
        
        while low < high:
            mid = int((high + low) / 2)
            if isBadVersion(mid):
                high = mid 
            else:
                low = mid + 1
        return low
```

## About
不会二分的程序员都是民主。
