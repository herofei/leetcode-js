/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let len = nums.length,
        res = [];
    if ( len < 3) {
        return res;
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {

        // 避免出现重复解,需对遍历出来的第一个数进行唯一操作
        if(i === 0 || nums[i] > nums[i-1]){
            let count = nums[i],
                l = i + 1,
                r = len - 1;
            while (l < r) {
                let total = nums[l] + nums[r] + count;
                if (total === 0) {
                    res.push([nums[i], nums[l], nums[r]]);
                    ++l;
                    --r;

                    // 原因同上，避免出现重复解
                    while (l < r && nums[l] === nums[l-1]) {
                        l++;
                    }

                    // 原因同上，避免出现重复解
                    while (l < r && nums[r] === nums[r+1]) {
                        r--;
                    }
                } else if (total < 0) {
                    ++l
                } else {
                    --r
                }
            }
        }
    }
    return res;
};