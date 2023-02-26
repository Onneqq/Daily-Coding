// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

// Example

// 

// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000
// Function Description

// Complete the plusMinus function in the editor below.

// plusMinus has the following parameter(s):

// int arr[n]: an array of integers

let arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    const n = arr.length
    let positives = 0
    let negatives = 0
    let zeros = 0

    arr.forEach((num) => {
        if (num === 0) {
            zeros++
        } else if (num === Math.abs(num)) {
            positives++
        } else if (num === -Math.abs(num)) {
            negatives++
        } 
    })
    return `${(positives/n).toFixed(6)}\n${(negatives/n).toFixed(6)}\n${(zeros/n).toFixed(6)}`
}

console.log(plusMinus(arr))