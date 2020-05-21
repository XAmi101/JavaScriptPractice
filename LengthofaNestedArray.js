
/**  INSTRUCTIONS
 
The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

  [1, [2, 3]]
  // 2 elements, number 1 and array [2, 3]

Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

***/



// **Write a function that returns the total number of non-nested items in a nested array.**
  /*** 
     EXAMPLES
        getLength([1, [2, 3]]) ➞ 3
        getLength([1, [2, [3, 4]]]) ➞ 4
        getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
        getLength([1, [2], 1, [2], 1]) ➞ 5

  ***/

function getLength(arr) {
    return arr.flat(Infinity).length;  //<< My solution
}
// const getLength = arr => arr.flat(Infinity).length;


// //Alternative solution 
// function getLength(arr) {
//     return arr.reduce((acc, el, index) => {
//         return Array.isArray(el) ? acc + getLength(el) : acc + 1;
//     }, 0);
// }

//Alternative solution using recursion
const flatten = arr =>
  arr.reduce((result, inner) => {
		console.log(inner)
    if (Array.isArray(inner)) return result.concat(flatten(inner));
    return result.concat(inner);
  }, []);

const getLength = arr => flatten(arr).length;


// //Alternative solution 
// function getLength(arr) {
//     return flatten(arr).length;
// }

// function flatten(arr) {
//     return arr.reduce(
//         (acc, v) => (Array.isArray(v) ? acc.concat(flatten(v)) : acc.concat(v)),
//         []
//     );
// }


// TESTING

getLength([1, [2, [3, 4]]]);
getLength([1, [2,3]])
// getLength([1, [2, [3, 4]]]),
// getLength([1, [2, [3, [4, [5, 6]]]]])
// getLength([1, 7, 8])
// getLength([2])
// getLength([2, [3], 4, [7]])
// getLength([2, [3, [5, 7]], 4, [7]])
// getLength([2, [3, [4, [5]]], [9]])
// getLength([])