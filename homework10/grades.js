let students = [
    {name: "Taras", grade: 80, age: 19},
    {name: "Vasya", grade: 10, age: 16},
    {name: "Kolya", grade: 88, age: 18},
    {name: "Bogdan", grade: 20, age: 17},
]

let maxGrade = 0;
let bestStudentName = "";
let sumGrade = 0;

const tabBody = document.querySelector(".student-list-body");
const bestStudent = document.querySelector(".best-student-info");
const avarageScore = document.querySelector(".avarage-score-info");


for (let s of students) {
    tabBody.innerHTML += `
        <tr>
            <td>${s.name}</td>
            <td>${s.age}</td>
            <td>${s.grade}</td>
        </tr>
    `;

    sumGrade += s.grade;

    if (s.grade > maxGrade) {
        maxGrade = s.grade;
        bestStudent = s.name;
    }
}

let av = sumGrade / students.length;

bestStudent.innerHTML = `Best student: ${bestStudentName}. Score: ${maxGrade}`;
avarageScore.innerHTML = `Avarage score: ${av}`;

console.log("Best result:", bestStudentName, maxGrade);
console.log("Avarage score:", av);