/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') return '0';
    var res = new Array(num1.length+num2.length);
    for(var l=0; l<res.length; l++) {
        res[l] = 0;
    }
    num1 = num1.split("").reverse();
    num2 = num2.split("").reverse();
    for(var i=0; i<num1.length; i++) {
        for(var j=0; j<num2.length; j++) {
            res[i+j] += num1[i]*num2[j];
        }
    }
    var carry = 0;
    var str = [];
    for(var l=0; l<res.length; l++) {
        res[l] += carry;
        carry = (res[l]/10) >> 0;
        res[l] = res[l] % 10;
        str[l] = res[l];
    }
    str = str.reverse().join('');
    var index = -1;
    for(var i=0; i<str.length; i++) {
        if(str[i] === '0') index = i;
        else break;
    }
    return index < 0 ? str : str.substr(index+1);
};