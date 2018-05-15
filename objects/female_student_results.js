const students = [
    {
        name: "Anna",
        sex: "f",
        grades: [4.5, 3.5, 4]
    },
    {
        name: "Dennis",
        sex: "m",
        country: "Germany",
        grades: [5, 1.5, 4]
    },
    {
        name: "Martha",
        sex: "f",
        grades: [5, 4,2.5, 3]
    },
    {
        name: "Brock",
        sex: "m",
        grades: [4, 3, 2]
    }
];

//Compute female student results - original
// const femaleStudentResults = [];
// for(const student of students){
//     if(student.sex === 'f'){
//         let gradeSum = 0;
//         for(const grade of student.grades){
//             gradeSum += grade;
//         }
//         const averageGrade = gradeSum/student.grades.length;
//         femaleStudentResults.push({name:student.name, averageGrade});
//     }
// }
// console.log(femaleStudentResults);

//Task - refactor using functional constructs

const femaleStudentResults = students.filter(student => student.sex === 'f')
                                     .map(student => {
                                         return {name: student.name,
                                                 averageGrade: student.grades.reduce((sum, grade) => sum+grade, 0)/student.grades.length}
                                     });

console.log(femaleStudentResults);