/**

Create a function that takes in an array of numbers and returns the sum of its cubes.

Examples
sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

sumOfCubes([3, 4, 5]) ➞ 216
sumOfCubes([2]) ➞ 8
sumOfCubes([]) ➞ 0

Notes
If given an empty array, return 0.

**/

/**

function sumOfCubes(arrayNums) {
	return arrayNums.reduce((acc, value) => acc+(value*value*value),0)
}
**/

console.log(sumOfCubes([3, 4, 5]) ) //➞ 216
Console.log(sumOfCubes([2])); //➞ 8

//Math.pow(base, exponent)

function sumOfCubes(arrayNums) {
	return arrayNums.reduce((acc, value) => acc + Math.pow(value, 3), 0);
}
