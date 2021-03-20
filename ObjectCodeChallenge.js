
// Given an object/dictionary with keys and values that consist of both strings and integers, design an algorithm to calculate and return the sum of all of the numeric values.
// For example, given the following object/dictionary as input:
// {
//   "cat": "bob",
//   "dog": 23,
//   19: 18,
//   90: "fish"
// }
// Your algorithm should return 41, the sum of the values 23 and 18.




var givenOBJ = {
  "cat": "bob",
  "dog": 23,
  19: 18,
  90: "fish"
};

let summedValue = 0;

// for (var value in givenOBJ) {
//     summedValue = givenOBJ.dog + givenOBJ[19] ;
// };

// console.log(Object.values(givenOBJ) )


// second try


for (let value in givenOBJ) {
  let numberCheck = (typeof givenOBJ[value] === 'number')
  if ( numberCheck) {
       summedValue += givenOBJ[value] ;
  };
}
