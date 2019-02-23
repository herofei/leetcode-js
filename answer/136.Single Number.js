/**
 * @param {number[]} nums
 * @return {number}
 */
// 使用异或，相同的数位异或等于0，最后剩余的就是唯一那个不同的数
var singleNumber = function(nums) {
    let len = nums.length,
        res = 0;
    for (let i = 0; i < len; i++) {
        res ^= nums[i];
    }
    return res;
};