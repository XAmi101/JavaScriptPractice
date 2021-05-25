/**
Create a function that takes an array of numbers and return its median. If the input array is even length, take the average of the two medians, else, take the single median.

Examples
median([2, 5, 6, 2, 6, 3, 4]) ➞ 4

median([21.4323, 432.54, 432.3, 542.4567]) ➞ 432.4

median([-23, -43, -29, -53, -67]) ➞ -43
Notes
Input can be any negative or positive number.
Input array will contain at least four numbers.
See Resources tab for info on calculating the median.
**/

function median(arr) {
  sortedArr = arr.sort((a, b) => a - b);
  if (arr.length % 2 !== 0) {
    return arr[(arr.length - 1) / 2]
  } else {
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
  }
}

console.log(median([2, 5, 6, 2, 6, 3, 4]))
