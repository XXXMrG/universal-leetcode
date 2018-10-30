# Find the single one
#Algorithm/leetcode
- - - -

> Given a non-empty array of integers, every element appears twice except for one. Find that single one.  
> Note:  
> Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?  

Example:
```
Input: [2,2,1]
Output: 1

Input: [4,1,2,1,2]
Output: 4
```

## First idea
这是一道很巧很巧的题，我们从题目中就可以窥出些许端倪，这是个十分特殊的数组，除了 single one 以外都是成对出现的，这个条件我们可以从数学角度解答，但是更好的方案是使用 XOR 。

## Solution

### 暴力法

暴力法总是可以解决一切问题，但是我们总能在思考问题时觉得有一些点还是可以优化的。

1. Iterate over all the elements in \text{nums}nums
2. If some number in \text{nums}nums is new to array, append it
3. If some number is already in the array, remove it

```python
class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        no_duplicate_list = []
        for i in nums:
            if i not in no_duplicate_list:
                no_duplicate_list.append(i)
            else:
                no_duplicate_list.remove(i)
        return no_duplicate_list.pop()
```

*算法复杂度*

时间复杂度： O(n ^ 2) ，因为 not in 操作实际上也是遍历了一遍数组
空间复杂度：O(n)，需要一个额外数组空间

### 哈希表

哈希表比数组优化的点在于我们在哈希表中查找一个值也就是 pop 操作的时候时间复杂度是 O(1) 级别的。算法思路基本相同。

```python
class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        hash_table = {}
        for i in nums:
            try:
                hash_table.pop(i)
            except:
                hash_table[i] = 1
        return hash_table.popitem()[0]
```

*算法复杂度*

时间复杂度：O(n) 因为哈希表 pop 操作是 O(1)
空间复杂度：O(n) 一个额外的哈希表


### 数学角度

公式：
> 2∗(a+b+c)−(a+a+b+b+c)=c  

同时在 python 中我们可以用 set 来直接去掉重复元素。

```python

class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return 2 * sum(set(nums)) - sum(nums)
```

时间复杂度： O(n) 实际上是两次遍历，也就是 O(n) + O(n)
空间复杂度： O(n) 使用了一个 set 来避免了一次遍历

### 最屌的来了

> Bit Manipulation  

Concept

If we take XOR of zero and some bit, it will return that bit
a ^ 0 = a
If we take XOR of two same bits, it will return 0
a ^ a = 0
a ^ b ^ a = ( a ^ a ) ^ b = 0 ^ b = b
So we can XOR all bits together to find the unique number.

```python

class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        a = 0
        for i in nums:
            a ^= i
        return a
```

*算法复杂度*

时间复杂度： O(n) 只需要遍历一次数组。
空间复杂度： O(1)

## About Algorithm
位操作
或操作
否操作
异或操作
