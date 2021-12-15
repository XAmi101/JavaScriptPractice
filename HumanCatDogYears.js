/**
Mubashir has a cat and a dog. He purchased both of them at the same time humanYears ago.

Create a function which takes an argument of humanYears and returns [humanYears, catYears, dogYears] array.

Human Years
Human Years >= 1
Human Years are whole numbers only.
Cat Years
15 cat years for first year.
+9 cat years for second year.
+4 cat years for each year after that.
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

Examples
calculateYears(1) ➞ [1, 15, 15]
calculateYears(2) ➞ [2, 24, 24]
calculateYears(10) ➞ [10, 56, 64]

Notes
N/A

**/
function calculateYears(humanYears) {
  if(humanYears===1){
    return [1,15,15];
  }else if(humanYears==2){
    return [2,24,24];
  }else{
    return [humanYears, 24+(humanYears-2)*4, 24+(humanYears-2)*5];
  }
	
}
