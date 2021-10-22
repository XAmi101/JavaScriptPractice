/**
Given an array, transform that array into a mirror.

Examples
mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]
mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]
mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]

Notes 
Do not repeat the last item of the given array.
**/

function mirror(arr) {
    //return arr.concat(arr.slice(0, arr.length - 1).reverse())
    return [...arr, ...arr.reverse().slice(1)];
}

Console.log(mirror([1,2,3,4,5]))

//const mirrors = arr => [...arr, ...arr.reverse().slice(1)];
