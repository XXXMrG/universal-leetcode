/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [];
    nums1.forEach(item => {
        let idx = nums2.indexOf(item);
        if (idx !== -1) {
            nums2.splice(idx, 1);
            result.push(item);
        }
    });
    return result;
};

