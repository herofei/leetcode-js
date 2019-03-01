/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 利用二分法，时间复杂度O(nlogn)，但是效率优点底，需要优化
var findKthLargest = function(nums, k) {
    let base = nums.splice(0, 1)[0],
        left = [],
        right = [];
    for (let i = 0, len = nums.length; i < len; i++) {
        let num = nums[i];
        if (num >= base) {
            left.push(num);
        } else {
            right.push(num);
        }
    }
    leftLen = left.length;
    if (leftLen === k - 1) {
        return base;
    } else if (leftLen < k - 1) {
        return findKthLargest(right, k - leftLen - 1);
    }

    return findKthLargest(left, k);
};