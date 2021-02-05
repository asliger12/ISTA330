/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    var newString = input.split('')
    for (var i = 1; i < shuffleIndices.length; i++)
        for (var j = 0; j < i; j++)
            if (shuffleIndices[i] < shuffleIndices[j]) {
                var x = shuffleIndices[i];
                var y = newString[i];
                shuffleIndices[i] = shuffleIndices[j];
                newString[i] = newString[j];
                shuffleIndices[j] = x;
                newString[j] = y;
        }
    return newString.join('');
};
