/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var nums = n.toString().split('');
    var max = Math.max.apply(null, nums)
    var min = Math.min.apply(null, nums)
    var result = parseInt(max-min)
    return result;
};
