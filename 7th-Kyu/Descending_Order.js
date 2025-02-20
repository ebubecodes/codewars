/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n){
    // convert n to string, then to an array
    // sort the array
    // convert back to number and return
    const sorted = n.toString().split('').sort((a, b) => b - a).join('')
    return Number(sorted)
}