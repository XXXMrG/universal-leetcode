/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let flag = 1
    const L = str.length
    for (var i = 0; i < L; i++) {
        if (str[i] === ' ') continue
        if (str[i] === '-') {
            flag = -1
            i++
            break
        }
        else if (str[i] === '+') {
            i++
            break
        }
        else if (!isNaN(Number(str[i]))) break
        else {
            return 0
        }
    }
    if (i === L) return 0
    let end = i
    while (str[end] !== ' ' && !isNaN(Number(str[end]))) {
        end++
    }
    let res = flag * str.slice(i, end) 
    if (res <= -Math.pow(2, 31)) return -Math.pow(2, 31)
    if (res >= Math.pow(2, 31)) return Math.pow(2, 31) - 1
    return res
};

