/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var threeSum = function(start, nums, target) {
        let len = nums.length,
            res = [];
        for (let i = 0; i < len; i++) {
    
            // 避免出现重复解,需对遍历出来的第一个数进行唯一操作
            if(i === 0 || nums[i] > nums[i-1]){
                let count = nums[i],
                    l = i + 1,
                    r = len - 1;
                while (l < r) {
                    let total = start + nums[l] + nums[r] + count;
                    debugger;
                    if (total === target) {
                        res.push([start, nums[i], nums[l], nums[r]]);
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
                    } else if (total < target) {
                        ++l
                    } else {
                        --r
                    }
                }
            }
        }
        return res;
    };
    let len = nums.length;
        res = [];
    if ( len < 4) {
        return res;
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        if(i === 0 || nums[i] > nums[i-1]){
            res = res.concat(threeSum(nums[i], nums.slice(i + 1)), target);
        }
    }
    return res;
};