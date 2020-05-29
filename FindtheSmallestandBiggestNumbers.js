// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]


function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}


// minMax([14, 35, 6, 1, 34, 54]) //, [1, 54]
// minMax([1.346, 1.6532, 1.8734, 1.8723]) //, [1.346, 1.8734]