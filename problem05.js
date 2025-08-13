function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return 'Invalid';
    }

    let totalMarks = 0;
    let passCount = 0;
    let failCount = 0;

    for (let i = 0; i < marks.length; i++) {
        totalMarks = totalMarks + marks[i];

        if (marks[i] >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }

    let avgMark = Math.round(totalMarks / marks.length);

    return {
        finalScore: avgMark,
        pass: passCount,
        fail: failCount
    }
}

console.log(resultReport(
    [98, 87, 67, 91, 92, 33, 87]
));