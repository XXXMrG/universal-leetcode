# Reverse String
#Algorithm/leetcode
- - - -
*NO.344*

> Write a function that takes a string as input and returns the string reversed.  


Examples:

```
Input: "hello"
Output: "olleh"

Input: "A man, a plan, a canal: Panama"
Output: "amanaP :lanac a ,nalp a ,nam A"

```


## First idea
字符串就是数组呗，倒转数组呗。

## Solution
使用倒转数组的方式来处理字符串，但是实际上跟暴力倒序遍历的性能基本差不多。

```python
class Solution:
    def reverseString(self, s):
        """
        :type s: str
        :rtype: str
        """
        s = list(s)
        first = 0
        last = len(s) - 1
        while first < last:
            swap = s[first]
            s[first] = s[last]
            s[last] = swap
            first += 1
            last -= 1  
		  # 数组转字符串
        return ''.join(s)
```

使用 python3 的切片来处理字符串，倒序切出所有字符串元素。性能比暴力遍历稍高，也不知道 python 内部是如何处理的。代码倒是只有一行

```python
	return s[::-1]
```

使用 java 的高级 api 倒转字符串，但是估计面试的时候不会让你调用这么高级的 api ，那么其实这个题的核心思路还是跟倒转数组是相同的，就是同时从数组两端遍历，时间复杂度应为 O(n / 2)。

```java
	return new StringBuffer(s).reverse().toString();
```

## About
python 🐂🍺。
