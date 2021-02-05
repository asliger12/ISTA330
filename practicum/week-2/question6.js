/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    var sorted = input.sort();
    var result = 0;
    var l = sorted.length
    if(l % 2 == 1){
        result = sorted[Math.round((l-1)/2)]
    } else {
        var a = sorted[l/2]
        var b = sorted[(l/2)-1]
        result = (a+b)/2
    }
    return result;
};