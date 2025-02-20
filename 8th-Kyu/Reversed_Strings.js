/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str){
    const chopped = str.split('')
    const flipped = chopped.reverse()
    const serve = flipped.join('')
    return serve
}