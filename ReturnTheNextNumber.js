/**
Create a function that takes a number as an argument, increments the number by +1 and returns the result.

Examples
addition(0) ➞ 1
addition(9) ➞ 10
addition(-3) ➞ -2

Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
**/

function addition(num) {
  if(num>=0 || num<0){
    return ++num;
  }
}
console.log(addition(0));
console.log(addition(-3));	
