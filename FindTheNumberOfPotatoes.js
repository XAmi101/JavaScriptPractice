/**
Create a function to return the amount of potatoes there are in a string.

Examples
potatoes("potato") ➞ 1
potatoes("potatopotato") ➞ 2
potatoes("potatoapple") ➞ 1



**/

function potatoes(str) {
     return str.match(/potato/g).length

}

/**
function potatoes(str) {
	return str.split("potato").length-1
}

**/

console.log(potatoes("potatopotato"))
