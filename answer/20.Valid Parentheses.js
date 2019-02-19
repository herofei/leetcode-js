/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let left = [],
        leftStr = '({[',
        i = 0,
        len = s.length;
    for(; i < len; i++) {
        let str = s[i];
        if (leftStr.indexOf(str) !== -1) {
            left.push(str);
        } else {
            str = left.pop() + str;
            if (!(str === '()' || str === '{}' || str === '[]')) {
                return false;
            }
        }
    }
    if (left.length === 0) {
        return true;
    } else {
        return false;
    }
};