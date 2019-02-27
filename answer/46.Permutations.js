/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
    if (nums.length == 1) {
        return [nums];
    } 
    let result = [];
    for(let i = 0; i < nums.length; i++) {

        // 选取一个数字，求剩余的数组的全排列
        let restArr = nums.slice(0,i).concat(nums.slice(i+1)),
            nextRes = permute(restArr);
        for(list of nextRes) {

            // 之前选取的数字插到剩余数组求得的全排列所有结果数组的首位
            list.unshift(nums[i]); 
            result.push(list);
        }
    }
    return result;
};