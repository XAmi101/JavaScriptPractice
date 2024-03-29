/**
Create a function that takes voltage and current and returns the calculated power.

Examples
circuitPower(230, 10) ➞ 2300

circuitPower(110, 3) ➞ 330

circuitPower(480, 20) ➞ 9600

Notes
Requires basic calculation of electrical circuits (see Resources for info).
**/

function circuitPower(voltage, current) {
    let power = voltage * current;
    return power;
}

console.log(circuitPower(480, 20));
