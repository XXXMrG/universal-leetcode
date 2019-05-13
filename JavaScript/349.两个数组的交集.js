/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = new Set()
    let hash = new Set(nums1);
    let N = nums2.length;
    for (let i = 0; i < N; i++) {
        if (hash.has(nums2[i])) {
            result.add(nums2[i]);
        }
    }
    return [...result];
};

