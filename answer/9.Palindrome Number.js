/**
 * @param {number} x
 * @return {boolean}
 */

// 利用从中心向两边扩散的思想
var isPalindrome = function(x) {
    let s = '' + x,
        len = s.length,
        mod = len % 2,
        left, right;
    
        if (mod === 1) {
            left = right = ~~(len / 2);
        } else {
            left = len / 2 - 1;
            right = left + 1;
        }
    while (left >= 0 && right <= len -1 && s[left] === s[right]) {
        --left;
        ++right;
    }
    if (left === -1 && right === len) {
        return true;
    }
    return false;
};