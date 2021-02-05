/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var maxSumOfMins = function(input) {
       var sorted = input.sort()
       var result = 0
       var pairs = [];
       for (var i = 0; i < sorted.length; i++){
           if(i == 0 || i%2==0){
              pairs.push([sorted[i], sorted[i+1]]);
           };
       }; 
       for (var j = 0; j < pairs.length; j++){
              result += pairs[j][0]
       }
       return result;
};
