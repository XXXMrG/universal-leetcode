/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let N = nums.length;
    for (let i = 1; i < N; i++) {
        let j = i;
        while (j > 0 && nums[j] !== 0 && nums[j - 1] === 0) {
            let swap = nums[j];
            nums[j] = nums[j-1];
            nums[j-1] = swap;
            j--;
        }
    }
};

