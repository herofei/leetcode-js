/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */


 /**
 * 解答思路
 * 1. 判断是否包含 s1 的排列的方法：
 * 截取 s2 中某长度和 s1 字符串长度相等的子串，判断两者每个字符的数量是否一致即可。
 * 2. 统计字符数量
 * 由于字符串只包含 26 个小写字母，我们可以使用 计数排序 来统计，即创建一个长度为 26 的数组，其下标 0 ~ 25 对应 a ~ z 的每个字母，其值为对应字母出现的次数。
 * 3. 判断条件
 * 先统计 s1 的字符数量 count1，再依次统计 s2 中与之长度相等的子串的字符数量 count2，比较两者是否相同。
 * 4. 解题关键
 * 通过滑动窗口，不断在s2字符串滑动s1距离长度的滑块，判断两者之间的子串的字符数量是否相等即可
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
    let diff = Array(26).fill(0);
    for (let i = 0; i < s1.length; ++i) {
        // 97为小写字母a的chartCode
        diff[s1[i].charCodeAt() - 97]++;
        diff[s2[i].charCodeAt() - 97]--;
    }
    // 滑动窗口，滑块长度始终为 s1.length()
    for (let i = s1.length; i < s2.length; ++i) {
        if (diff.every(val => val === 0)) {
            return true;
        }

        // 去掉滑块当前的首个字符
        diff[s2[i - s1.length].charCodeAt() - 97]++;

        // 添加最新的字符到滑块中
        diff[s2[i].charCodeAt() - 97]--;
    }
    return diff.every(val => val === 0);
};