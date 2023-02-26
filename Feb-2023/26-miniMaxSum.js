// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24
// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Input Format

// A single line of five space-separated integers.

// Constraints


// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14

function miniMaxSum(arr) {
    //sort array
    const sortedArr = arr.sort(function(a, b){return a-b})
    let lowestSum = null
    let highestSum = null

    //lowest sum
    for (let i = 0; i < sortedArr.length - 1; i++) {
        lowestSum += sortedArr[i]     
    }
    //highest sum
    for (let i = 1; i < sortedArr.length; i++) {
        highestSum += sortedArr[i]     
    }
    

    console.log(`${lowestSum} ${highestSum}`)
}

miniMaxSum([1, 2, 3, 4, 5]) // => 10 14

