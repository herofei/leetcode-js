/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0],
        sum = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        sum += nums[i];
        if (sum >= max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0
        }
    }
    return max;
};