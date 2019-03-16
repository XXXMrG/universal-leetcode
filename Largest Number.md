#  Largest Number
#Algorithm/leetcode
- - - -
*NO.179*

Given a list of non negative integers, arrange them such that they form the largest number.
```
Example 1:
Input: [10,2]
Output: “210”
Example 2:
Input: [3,30,34,5,9]
Output: “9534330”
```

**Note:**The result may be very large, so you need to return a string instead of an integer.



## Solution
堆排序

```swift

func largestNumber(_ nums: [Int]) -> String {
    var res = [String]()
    res.append("0")
    for i in nums {
        res.append(String(i))
    }
    // 0 的特判，数组长度是比原数组大一的，因为我们使用了堆，第一个元素没有用
    let array = Array(repeating: "0", count: nums.count + 1)
    if res == array {
        return "0"
    }
    sort(&res)
    var mmax = ""
    for i in 1 ..< res.count {
        mmax += res[i]
    }
    return mmax
}

func sort(_ data: inout [String]) {
    var N = data.count - 1
    for i in stride(from: N / 2, through: 1, by: -1) {
        sink(&data, i, N)
    }
    
    while N > 1 {
        data.swapAt(1, N)
        N -= 1
        sink(&data, 1, N)
    }
}

func sink(_ data: inout [String], _ k: Int, _ N: Int) {
    var i = k
    while 2*i <= N {
        var j = 2 * i
        if j < N && biger(data[j], data[j+1]) {
            j += 1
        }
        guard biger(data[i], data[j]) else {
            return
        }
        data.swapAt(i, j)
        i = j
    }
}

func biger(_ ls: String, _ rs: String) -> Bool {
    // ab > ba
    if Int(ls + rs)! > Int(rs + ls)! {
        return true
    }
    return false
}

```

希尔排序

```swift
class Solution {
    func largestNumber(_ nums: [Int]) -> String {
    var a = [String]()
    let N = nums.count
    var h = 1
    for x in nums {
        a.append(String(x))
    }
    let array = Array(repeating: "0", count: N)
    if a == array {
        return "0"
    }
    while h < N / 3 {
        h = 3 * h + 1
    }
    
    while h >= 1 {
        for i in h ..< N {
            var j = i
            while j >= h && biger(a[j], a[j - h]) {
                a.swapAt(j, j-h)
                j -= h
            }
        }
        h = h / 2
    }
    var mmax = ""
    for i in 0 ..< N {
        mmax += a[i]
    }
    return mmax
    }

    func biger(_ ls: String, _ rs: String) -> Bool {
        if Int(ls + rs)! > Int(rs + ls)! {
            return true
        }
        return false
    }
}
```


