// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45

function timeConversion(s) {
    let isPM = false
    let removedPM = ''
    let removedAM = ''
    const splitTime = s.split(':')

    if (s.includes('PM')) {
        isPM = true
        removedPM = splitTime[2].replace('PM', '')
        if (splitTime[0] === '12') {
            splitTime.shift()
            splitTime.unshift('00')
        }
    } else if (s.includes('AM')) {
        isPM = false
        removedAM = splitTime[2].replace('AM', '')
        if (splitTime[0] === '12') {
            splitTime.shift()
            splitTime.unshift('00')
        }
    }

    if (isPM === true) {
        return `${Number(splitTime[0]) + 12}:${splitTime[1]}:${removedPM}`
    } else if (isPM === false) {
        return `${splitTime[0]}:${splitTime[1]}:${removedAM}`
    }
}

console.log(timeConversion('07:05:45PM'))
console.log(timeConversion('12:05:45AM'))
console.log(timeConversion('09:15:35PM'))
console.log(timeConversion('12:45:54PM'))
console.log(timeConversion('00:00:00AM'))