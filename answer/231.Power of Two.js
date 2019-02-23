/**
 * @param {number} n
 * @return {boolean}
 */
// 最优解，用位运算
var isPowerOfTwo = function(n) {
    if(n <= 0) {
        return false;
    }
    if((n & n-1) === 0) {
        return true;
    }
    return false;
};


// 常规解
var isPowerOfTwo = function(n) {
    if(n == 1) {
        return true
    }
    while (n>1) {
        n = n/2
        if(n%1 > 0) {
            return false
        }
    }
    return n === 1
};