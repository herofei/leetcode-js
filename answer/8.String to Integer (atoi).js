/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    let regx = /^\s*([-+]?\d+)/,
        res = 0,
        match = regx.exec(str);
    if (match && match[1]) {
        res = +match[1];
    }
    if (res < -Math.pow(2, 31)) {
        return -Math.pow(2, 31)
    } else if (res > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }
    return res;
};