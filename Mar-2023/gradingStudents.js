function gradingStudents(grades) {
    // grade < 40 => fail
    // rounding if grade < 3 to next multiple of 5
    // if grade < 38 => fail
    const possibleGrades = [];
    for (let i = 38; i <= 100; i++) {
        if (i % 5 === 0) {
            possibleGrades.push(i);
        }
    }

    let finalGrades = [];
    // loop through grades
    grades.forEach((grade) => {
        let numCheck = grade.toString().split('')
        let firstInt = Number(numCheck[0]) + 1
        if (grade < 38 || numCheck[1] === '0' || numCheck[1] === '1' || numCheck[1] === '2' || numCheck[1] === '5' || numCheck[1] === '6' || numCheck[1] === '7') {
            finalGrades.push(grade);
        } else {
            if (numCheck[1] === '3' || numCheck[1] === '4') {
                finalGrades.push(Number(numCheck[0] + '5'))
            } else if (grade === 98 || grade === 99 || grade === 100) {
                finalGrades.push(100)
            } else {
                finalGrades.push(Number(firstInt + '0'))
            }
        }
    }); 

    return finalGrades
}

console.log(gradingStudents([1, 62, 32, 48, 52, 3, 97, 84, 81, 99, 74]))