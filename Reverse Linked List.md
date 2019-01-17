# Reverse Linked List
#Algorithm/leetcode
- - - -

> Reverse a singly linked list.  

Example

```

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

```

Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

## First idea
反转就行了，考察最基本的链表操作。

## Solution

普通解法，就普通的遍历链表，每次新建一个新节点作为当前节点的父节点，最后达到反向拼接的效果。

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode now, last;
        last = null;
        while(head != null){

            now = new ListNode(head.val);
            now.next = last;
            last = now;
            head = head.next;
        }
        return last;
    }
}
```


牛逼解法：
利用了 python 中多元赋值时右边的值并不会因为之前的变量改变而改变，而是依旧保持原有的值进行赋值，也就是说我们假设这样一个情况 `a, b, c = 1, a, a`  此时的 b 和 c 的值并非是 1 ，而是保存了 a 原来的值，因为多元赋值的机制是，整个语句结束后变量的值才会发生改变，这样一来我们就可以保存未改变之前的节点值作为当前节点的后继节点，这样既不用开辟新的临时空间，看起来也好屌啊。

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        p, rev = head, None
        while p:
            rev, rev.next, p = p, rev, p.next
        return rev
```


## About

