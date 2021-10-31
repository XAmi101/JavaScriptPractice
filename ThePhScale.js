/**
Given a pH value, return whether that value is "alkaline" (greater than 7), "acidic" (less than 7), or "neutral" (7). Return "invalid" if the value given is less than 0 or greater than 14.

Image of a pH chart 

Examples
pHName(5) ➞ "acidic"
pHName(8.7) ➞ "alkaline"
pHName(7) ➞ "neutral"

Notes
Values such as 6.9999 and 8.00001 should return "acidic" and "alkaline" respectively.
**/

function pHName(pH) {
	if (pH < 7 && pH >= 0) return 'acidic'; 
	if (pH > 7 && pH <= 14)return 'alkaline';
	if (pH === 7) return 'neutral';
	else return 'invalid';
}

console.log(pHName(9));


/**
const pHName = pH =>
	pH < 0 || pH > 14 ? "invalid"
    : pH < 7 ? "acidic"
	: pH > 7 ? "alkaline"
	: "neutral";
**/
