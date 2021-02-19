/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  var triangle = [];
  if (n == 0) {
    return triangle
  }
  for (var i=0; i < n; i++) {
    triangle[i] = [];
    triangle[i][0] = 1;
    for (var j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
    }
    triangle[i][i] = 1;
  }
  return triangle;
};
