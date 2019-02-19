/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let len = nums.length,
        i = 0,
        closestRes = nums[0] + nums[1] + nums[2];
    if (len <= 3) {
        return closestRes;
    }
    nums.sort((a, b) => a - b);
    for (; i < len; i++)  {
        let l = i + 1,
            r = len - 1;
        while (l < r) {
            let total = nums[i] + nums[l] + nums[r];
            if (total === target) {
                return target;
            }

            if (Math.abs(total - target) < Math.abs(closestRes - target)) {
                closestRes = total;
            }

            if (total - target < 0) {
                l++;
            } else {
                r--;
            }
        }
    }
    return closestRes;
};