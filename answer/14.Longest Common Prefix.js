/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if (strs.length < 1) {
        return '';
    }

    let base = strs[0],
        len = base.length,
        res = '';
    for (let j = 0; j < len; j++) {
        let str = base.charAt(j);

        if (isSame(strs, j, str)) {
            res += str;
        } else {
            return res;
        }
    }

    function isSame (strs, index, code) {
        let arrLen = strs.length,
            isSame = true;
        for (let i = 1; i < arrLen; i++) {
            if (strs[i].charAt(index) !== code) {
                return isSame = false;
            }
        }
        return isSame;
    }
    
    return res;
};