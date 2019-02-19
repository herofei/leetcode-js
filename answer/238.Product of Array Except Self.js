/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 两个指针，一个从左到右，得出的结果left是nums的index下标以前的数相乘的值
// 另一个从右往左，得出的结果right是nums的j下标以后的数相乘的值，然后两者相乘，即为除该下标本身以外所有数的乘积
var productExceptSelf = function(nums) {
    let left = 1,
        right = 1,
        len = nums.length,
        res = [];
    for(let i = 0; i < len; i++) {
        res[i] = left;
        left *= nums[i];
    }
    for(let j = len -1; j >= 0; j--) {
        res[j] *= right;
        right *= nums[j];
    }
    return res;
};