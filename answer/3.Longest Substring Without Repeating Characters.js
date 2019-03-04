/**
 * @param {string} s
 * @return {number}
 */
// 利用单指针，时间复杂度为O(n);

var lengthOfLongestSubstring = function(s) {
    let hash = {},
        start = 0,
        res = 0;
  
    for (let i = 0, len = s.length; i < len; i++) {
        let item = s[i];

        if (!hash[item]) {
            hash[item] = true;
        } else {
            // item 已经在 substring 中存在了
            for (; ;) {
                if (s[start] === item) {
                    start++;
                    break;
                }
                hash[s[start]] = false;
                start++;
            }
        }
        res = Math.max(res, i - start + 1);
    }
    return res;
};