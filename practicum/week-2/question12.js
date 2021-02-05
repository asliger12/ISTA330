/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
  var subStrings = [];
  for (var i = 0; i < input.length - 1; i+=2){
    if (i+3 == input.length){
      subStrings.push(input.substr(i, 3))
    } else {
      subStrings.push(input.substr(i, 2))
    }
  }
  var count = 0;
  if(subStrings[subStrings.length - 1].includes('ab') ||
    subStrings[subStrings.length - 1].includes('ba')){
    count += 1;
  }
  for(var j = 0; j < subStrings.length - 1; j++) {
      if(subStrings[j] === 'ab' || subStrings[j] === 'ba') {
          count+=1
      } else if (subStrings[j] === 'aa' && subStrings[j+1] === 'bb'){
          count+=1
      }
  }
  return count;
};
