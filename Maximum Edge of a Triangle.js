/*
// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.



Examples
nextEdge(8, 10) ➞ 17

nextEdge(5, 7) ➞ 11

nextEdge(9, 2) ➞ 10

*/

//PLAN
//due to the triangle inequality theorem any two sides of a triangle need to add to up to be more than the third side

// function nextEdge(side1, side2) {
//     return (side1 + side2) - 1;
//

// }

let nextEdge = (side1, side2) => {
	let maxLength = (side1 + side2) - 1;
	return maxLength;
};
console.log(nextEdge(9, 2));
