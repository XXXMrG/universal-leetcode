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
    let hash = new Set(nums1);
    let N = nums2.length;
    for (let i = 0; i < N; i++) {
        if (hash.has(nums2[i])) {
            result.push(nums2[i]);
        }
    }
    return result;
};

