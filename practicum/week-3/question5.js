/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
    for (var i=0; i < input.length - 1; i++){
        var isIncreasing = true;
        if (input[i] > input[i+1]){
            isIncreasing = false;
            break;
        }
    } 
    for (var j=0; j < input.length - 1; j++){
        var isDecreasing = true;
        if (input[j] < input[j+1]){
            isDecreasing = false;
            break;
        }
    }
    return (isIncreasing||isDecreasing);
};
