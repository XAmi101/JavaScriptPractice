/**

This challenge will help you interpret mathematical relationships both algebraically and geometrically.

Matchstick Houses, Steps 1, 2 and 3

Create a function that takes a number (step) as an argument and returns the amount of matchsticks in that step. See step 1, 2 and 3 in the image above.

Examples

matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436


Notes

Step 0 returns 0 matchsticks.

The input (step) will always be a non-negative integer.

Think of the input (step) as the total number of houses that have been connected togethe

**/



function matchHouses(step) {
	if (step == 0 ) {
		return 0
  } else {

		return (step * 5)+ 1

	}
		

console.log(matchHouses(1)) //6)

console.log(matchHouses(87)) // 436)
console.log(matchHouses(4)) //21)


Test.assertEquals(matchHouses(17), 86)

Test.assertEquals(matchHouses(36), 181)

Test.assertEquals(matchHouses(15), 76)

Test.assertEquals(matchHouses(99), 496)

Test.assertEquals(matchHouses(3), 16)

Test.assertEquals(matchHouses(87), 436)
