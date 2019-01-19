# First Unique Characher in a String
#Algorithm/leetcode
- - - -
*NO.387*

> Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.  

Examples:

```

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

```

## First idea
第一个想法是先反转字符串，然后对于每一个字符调用 count 方法，用结果作为 key 值，这样更新到第一个字符时哈希表里面键值为 1 的元素对应的值就是第一个唯一的字符。
但是一想反转字符串的代价有点太大了，而且对于哈希表有好多无意义的操作啊。
那我就直接倒序遍历多好啊。
好像可以用二分诶。

## Solution
哦吼，完蛋，超时，但是解法应该是没错的。因为 count 是个很耗时的方法，每一次其实都在遍历整个字符串。

```python
class Solution:
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """     
        dic = {}
        for i in range(len(s) - 1, -1, -1):
            index = s.count(s[i])
            dic[index] = i

        return dic.get(1, -1)
```

利用了题目要求中的，假设字符串只包含小写字母，那么其实很容易的就能想到字符串最多也就包含 26 个英文字母，因此我们可以利用 ascii 码计算字母的序号并将其放入一个大小为 26 的字符数组中保存，最后遍历字符串，得到对应的字符出现的次数，返回第一个为 1 的元素下标即可。

```java
public class Solution {
    public int firstUniqChar(String s) {
        int freq [] = new int[26];
        for(int i = 0; i < s.length(); i ++)
            freq [s.charAt(i) - 'a'] ++;
        for(int i = 0; i < s.length(); i ++)
            if(freq [s.charAt(i) - 'a'] == 1)
                return i;
        return -1;
    }
}
```

使用了哈希表的方法，先遍历整个字符串，将每个字符作为索引建立哈希表，重复出现的元素对应的值 +1 ，这样我们就有了一个保存了每个元素对应出现次数的哈希表，再次遍历字符串，从哈希表中拿到那个只出现一次的字符。

```java

class Solution {
    public int firstUniqChar(String s) {
        HashMap<Character, Integer> count = new HashMap();
        int n = s.length();
        // build hash map : character and how often it appears
        for (int i = 0; i < n; i++) {
            char c = s.charAt(i);
            count.put(c, count.getOrDefault(c, 0) + 1);
        }
        
        // find the index
        for (int i = 0; i < n; i++) {
            if (count.get(s.charAt(i)) == 1) 
                return i;
        }
        return -1;
    }
}

```

::注意::

题目要求有两个：
1. 只出现一次
2. 最前面的那个元素

也就是说我们在建立好数组或哈希表的时候不能直接遍历所得到的这个表，因为这个表已经丢失了字符串中的顺序信息，因此我们只能再遍历一次原字符串，借助原有的次序信息得到结果。

## About
