/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = '' + x,
        flag = '',
        res;
    if (str[0] === '-') {
        str = str.substr(1);
        flag = '-';
    }
    res = +(flag + str.split('').reverse().join());
    if (res > Math.pow(2,31) - 1 || res < -Math.pow(2,31)) {
        return 0;
    }
    return 0;
};