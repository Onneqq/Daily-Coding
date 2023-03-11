// . Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
// Test Data :

function is_array (arr) {
   return Array.isArray(arr)
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
// false
// true

// Write a JavaScript function to clone an array. Go to the editor
// Test Data :\
function array_Clone (arr) {
    let cloneArr = arr.slice(0)
    return cloneArr
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
// Test Data :

function first(arr, n) {
    if (n === -Math.abs(n)) {
        return arr.slice(0, 1)
    } else if (n) {
        return arr.slice(0, n)
    }
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []