/**

Create a function to calculate the distance between 
two points defined by their x, y coordinates
**/



function getDistance(x1, y1, x2, y2)
{
    let len1 = x2 - x1;
    let len2 = y2 - y1;
    
    return Math.sqrt(len1 * len1 + len2 * len2);
}

console.log(getDistance(100, 100, 400, 300));
