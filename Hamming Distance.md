# Hamming Distance
#Algorithm/leetcode
- - - -
*NO.461*

> The Hamming distance between two integers is the number of positions at which the corresponding bits are different.  
>   
> Given two integers x and y, calculate the Hamming distance.  
>   
> Note:  
> 0 ≤ x, y < 2^31.  

Example:

```
Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
```


## First idea

汉明距离嘛，实际上就是两个数的二进制异或。

## Solution
暴力法，全部手写， 进制转换 + 直接遍历

```python

class Solution:
    def hammingDistance(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: int
        """
        _max = max(x, y)
        _min = min(x, y)
        res = 0
        while int(_max) != 0:
            a = _max % 2
            b = _min % 2
            if a != b:
                res += 1
            _max = int(_max / 2)
            _min = int(_min / 2)
        return res
```

运用 XOR 操作 + python 字符串处理 api 直接求解。

```python
    def hammingDistance(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: int
        """
        return bin(x^y).count('1')
```


## About
