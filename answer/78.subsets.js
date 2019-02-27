/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 利用深度搜索,以下解法输入[1,2,3]，按顺序输出值为
// subsets([1,2,3])
// [
//     [],
//     [1],
//     [1, 2],
//     [1, 2, 3],
//     [1, 3],
//     [2],
//     [2, 3],
//     [3]
// ]


var subsets = function(nums) {
    let sums = [];
    dfs([], 0);
    return sums;
    function dfs(array, start) {
        sums.push(array);
        for (var i = start; i < nums.length; i++) {
            dfs(array.concat(nums[i]), i+1)
        }   
    }
};