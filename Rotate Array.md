# Rotate Array
#Algorithm/leetcode

*NO.189*

> Given an array, rotate the array to the right by k steps, where k is non-negative.  

Example

```
Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```


## First idea
旋转数组，关键在于多步旋转时数组元素的交换策略和元素保存，最简单的思路就是每次旋转一步，重复旋转 k 次，此时时间复杂度为 O (n * k) ，实际提交基本上肯定会超时。观察数组变化规律我们可以得到更好的解决方案。

## Solulation

### 暴力法

算法超时，简单粗暴。

```c
void rotate(int* nums, int numsSize, int k) {
        k = k % numsSize;
        for(int i = 0; i < k; i++){
            goOne(nums, numsSize);
        }
}

void goOne(int* nums, int numsSize){
    for (int i = numsSize - 1; i > 0; i--){
        int index = (i + 1) % numsSize;
        nums[i] = nums[i] ^ nums[index];
        nums[index] = nums[i] ^ nums[index];
        nums[i] = nums[i] ^ nums[index];
    }
}
```

不占用额外的空间。

### 数组切割法

我们观察数组变化规律会发现变化后的数组于原来的相比，实际上就是将后 k 个元素提到数组最前面，然后将剩余元素后移，我们可以借用一个额外数组来实现这个操作。

```python
class Solution:
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        a = []
        k = k % len(nums)
        for index in range(-k, 0):
            a.append(nums[index])
        for index in range(0, len(nums) - k):
            a.append(nums[index])
        for index in range(0, len(nums)):
            nums[index] = a[index]

```

*复杂度分析*

时间复杂度 O(n) ： 遍历了一次数组
空间复杂度 O(n) ：使用了一个额外的数组，但是实际情况应该可以继续缩小这个数组的大小，理论上使用 k 大小的数组就应该可以完成操作。

### 数组倒置法

同样观察数组，我们可以发现我们虽不能直接将数组元素分别移动到最终位置，但是我们可以观察到数组实际上是在后 k 个元素上发生了改变，我们将这 k 个元素与其他 n - k 个元素分隔开操作，便可以得到我们的结果。

```python
class Solution:
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        k = k % len(nums)
        self.reverse(nums, 0, len(nums) - 1)
        self.reverse(nums, 0, k - 1)
        self.reverse(nums, k, len(nums) - 1)
        
        
    def reverse(self, nums, start, end):
        while(start < end):
            nums[start] = nums[start] ^ nums[end]
            nums[end] = nums[start] ^ nums[end]
            nums[start] = nums[start] ^ nums[end]
            start += 1
            end -= 1
            
```

1. 倒置整个数组。
2. 倒置前 k 个元素
3. 倒置后 n - k 个元素

时间复杂度 O(n) ：需要遍历三次数组来倒置数组。
空间复杂度 O(1)： 没有额外的空间开销。

### 分别调换法

我们已经意识到，不能直接交换元素的原因在于数组中元素的交换并不是简单的两两交换，在交换过程中往往同时涉及到多个元素位置的改变，此种改变是难以记录的，但是我们也可以通过完全模拟交换的方式来解决这个问题，这种方法较为难懂，但也拥有着令人满意的复杂度。

```java
public class Solution {
    public void rotate(int[] nums, int k) {
        k = k % nums.length;
        int count = 0;
        for (int start = 0; count < nums.length; start++) {
            int current = start;
            int prev = nums[start];
            do {
                int next = (current + k) % nums.length;
                int temp = nums[next];
                nums[next] = prev;
                prev = temp;
                current = next;
                count++;
            } while (start != current);
        }
    }
}
```


分析

![5be2c54b8f684.png](https://i.loli.net/2018/11/07/5be2c54b8f684.png)


*复杂度分析*

时间复杂度：O(n) 只遍历了一次数组
空间复杂度：O(1) 没有额外的空间占用。

## About Algorithm

数组操作啊。
