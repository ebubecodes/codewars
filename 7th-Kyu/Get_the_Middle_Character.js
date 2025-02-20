/*
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
*/

function getMiddle(s) {
    //Code goes here!
    const len = s.length;
    const mid = Math.floor((len-1) / 2);
    let midStr = s.at(mid)
    if (len % 2 === 0) {
      return midStr + s.at(mid+1)
    } else {
      return midStr;
    }
}