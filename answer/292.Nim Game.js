/**
 * @param {number} n
 * @return {boolean}
 */

// 巴什博弈，拿1~m个数，谁面临k(m + 1)的局面谁就会输
var canWinNim = function(n) {
    return n % 4 !== 0
};