/**
Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.

Examples
inchesToFeet(324) ➞ 27
inchesToFeet(12) ➞ 1
inchesToFeet(36) ➞ 3

Notes
If inches are under 12, return 0.
12 inches = 1 foot.

**/

function inchesToFeet(inches) {
    if (inches>12) {
        return inches/12;
    } else {
        return 0;
    }
}


console.log(inchesToFeet(72))
