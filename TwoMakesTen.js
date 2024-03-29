/**
Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

Examples
makesTen(9, 10) ➞ true
makesTen(9, 9) ➞ false
makesTen(1, 9) ➞ true

Notes
Don't forget to return the result.

**/

/**
function makesTen(a, b) {
    if(a ===10||b === 10){
	return true;
    } else if(a+b === 10){
	return true;
    } else {
	return false;
    }
}
**/

const makesTen = (a, b) => [a, b, a + b].includes(10);

console.log(makesTen(10, 9));
