/**
Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

Examples
maxNum(3, 7) ➞ 7
maxNum(-1, 0) ➞ 0
maxNum(1000, 400) ➞ 1000

Notes
READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
Don't overthink this challenge; it's not supposed to be hard.

**/

function maxNum(n1,n2) {
	if (n1>n2) {
	  return n1;
	}else{
	return n2;
  }
}

console.log(maxNum(1000, 400) );
