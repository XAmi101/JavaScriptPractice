/**

Create a function that takes an array of numbers and
returns an array containing only the positive numbers

getPostive([-5, 10, -3, 12, -9, 5, 90, 0, 1];) ➞ [10, 12, 5, 90, 0, 1];
getPostive([7, -33, 52, 1]) ➞ [7, 52, 1]


**/

function getPos(array)
{
    return array.filter(el => el >= 0);
}

Let array= [-5, 10, -3, 12, -9, 5, 90, 0, 1];
Let array2 = getPos(array);
println(array2);
