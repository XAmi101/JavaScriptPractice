/**

Imagine a circle and two squares: a smaller and a bigger one. For the smaller one, the circle is a circumcircle and for the bigger one, an incircle.

Scale

Create a function, that takes an integer (radius of the circle) and returns the difference of the areas of the two squares.

Examples
squareAreasDifference(5) ➞ 50
squareAreasDifference(6) ➞ 72
squareAreasDifference(7) ➞ 98

Notes
Use only positive integer parameters.

**/

function squareAreasDifference(r) {
  return  2 * r ** 2;
}

//const squareAreasDifference = r => 2 * radius ** 2;

console.log(squareAreasDifference(7) )
