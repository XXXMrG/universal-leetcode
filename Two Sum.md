# Two Sum
#Algorithm/leetcode
- - - -
*no.1*

> Given an array of integers, return indices of the two numbers such that they add up to a specific target.  
>   
> You may assume that each input would have exactly one solution, and you may not use the same element twice.  

Example:
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```


## First idea
LeetCode 的第一题，主要考察简单的遍历方法，第一印象是如果不采用暴力遍历的话一定要对数组进行清洗，清洗掉不可能出现在结果集中的数据，并且在清洗过程中要对数组下标进行保存，而可以同时保存内容和下标的数据结构便是哈希表，并且哈希表的查找时间复杂度永远是 O(1) ，可以实现以时间换空间的效果。

## Solution
根据实际的提交过程来看，如何清洗掉数据是不太可能的，因为参与计算的数值中存在负数和零等特殊值，无法简单的通过大小比较来过滤掉那些不可能的数据，那么我们就有两种解决方案，暴力法和哈希法。

### 暴力法

``` python
class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        result = []
        for index in range(0, len(nums)):
            if len(result) == 2:
                break;
            for index_next in range(0, len(nums)):
                if index == index_next:
                    break;
                if nums[index] + nums[index_next] == target:
                    result.append(index_next)
                    result.append(index)
        if result:
            return result
        else:
            return None
        
```

*执行用时*

![5bd7137c7570a.png](https://i.loli.net/2018/10/29/5bd7137c7570a.png)

*算法分析*

暴力法，简单粗暴，两次遍历，问题在于不知是否由于 python 对于 for 循环的处理方式问题，本来是第二重循环应该是从 index + 1 开始循环，从而减少重复遍历，但是实际更改后却超出了时间。
时间复杂度 O(n ^ 2)
空间复杂度 O(1)

### 哈希表

```python
class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        hashmap = {}

        for index in range(0, len(nums)):
            complement = target - nums[index]
            if(complement in hashmap):
                return [hashmap.get(complement), index]
            hashmap[nums[index]] = index
```

*执行用时*

![5bd7139b3be85.png](https://i.loli.net/2018/10/29/5bd7139b3be85.png)


*算法分析*

遍历的同时加入哈希表，找到结果便返回。
时间复杂度 O(n)
空间复杂度 O(n)

### Swift 实现

```swift
class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var dict = [Int : Int]()     
        for i in 0...nums.count {
            var complement = target - nums[i]
            if let lastIndex = dict[complement] {
                return [lastIndex, i]
            }   
            dict[nums[i]] = i
        }
        return []
    }
}
```
## About Algorithm
理解哈希表的实现原理。
