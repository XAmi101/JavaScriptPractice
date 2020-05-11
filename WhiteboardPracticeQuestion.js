// Print out all of the strings in the following array in alphabetical order, each on a separate line.

const givenArray = [
	"Waltz",
	"Tango",
	"Viennese Waltz",
	"Foxtrot",
	"Cha Cha",
	"Samba",
	"Rumba",
	"Paso Doble",
	"Jive"
];

// My answer
givenArray.sort();
console.log(givenArray.join("\n"));

// My answer
// const sortedArray = givenArray.sort(function (a, b) {
//       if (a < b) return -1;
//       else if (a > b) return 1;
//       return 0;
//     });
// console.log(sortedArray.join("\r\n"));

// 3rd way
// givenArray.sort()
// for(let i = 0; i < givenArray.length; i++){
//   console.log(givenArray[i])
// }
