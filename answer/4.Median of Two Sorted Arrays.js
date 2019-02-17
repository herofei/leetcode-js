/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums = nums1.concat(nums2),
        len = nums.length;
    nums.sort((a,b) => a - b);
    let mod = len % 2,
        index;
    if (mod === 1) {
        index = Math.floor(len/2);
        return nums[index];
    }
    
    index = len/2;
    return (nums[index] + nums[index - 1])/2;
};