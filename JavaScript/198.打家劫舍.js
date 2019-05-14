/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    let prv1 = 0;
    let prv2 = 0;
    for (let item of nums) {
        let temp = prv1;
        prv1 = Math.max(prv2 + item, prv1);
        prv2 = temp;
    }
    return prv1;
};

