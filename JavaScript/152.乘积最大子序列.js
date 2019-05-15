/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = -Infinity;
    let imax = 1;
    let imin = 1;
    let N = nums.length;
    for (let i = 0; i < N; i++) {
        // 负数会倒转最大值和最小值
        if (nums[i] < 0) {
            let temp = imax;
            imax = imin;
            imin = temp;
        }
        // 如果不乘当前元素的话，就以当前元素为新的头
        imax = Math.max(imax * nums[i], nums[i]);
        imin = Math.min(imin * nums[i], nums[i]);
        res = Math.max(imax, res);
    }
    return res;
};

