/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) {
        return n
    }
    let sum = 0,
        no1 = 1,
        no2 = 2,
        i = 3;
    while (i <= n) {
        sum = no1 + no2;
        no1 = no2;
        no2 = sum;
        i++;
    };
    return sum;
};