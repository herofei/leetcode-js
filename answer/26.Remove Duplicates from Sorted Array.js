/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let res = 0;
    for (var i = nums.length; i >= 0; i--) {
        if (i === nums.length - 1) {
            res++;
        } else if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
        } else {
            res++;
        }
    }

    return res;
};