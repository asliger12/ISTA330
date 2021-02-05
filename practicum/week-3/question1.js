/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
        var max = Math.max.apply(null, input)
        var toCompare = max/2
        input.splice(input.indexOf(max), 1)
        
        var result = input.every(check);

        function check(value, index, array){
                return value < toCompare;
        }
        
        return result;
};
