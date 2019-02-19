/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.split(' '),
        len = arr.length;
    for(let i = 0; i < len; i++) {
        let tem = arr[i];
        tem = tem.split('').reverse().join('');
        arr[i] = tem;
    }
    return arr.join(' ');
};