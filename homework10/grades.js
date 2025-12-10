let students = [
    {name: "Taras", grade: 80, age: 19},
    {name: "Vasya", grade: 10, age: 16},
    {name: "Kolya", grade: 88, age: 18},
    {name: "Bogdan", grade: 20, age: 17},
]

let grade = null;
let studName = "";
let a = [];
sumGrade = null;
av = null;

for (let s of students) {
    console.log(s.name, "(", s.age, "years old", ") -", s.grade)
}

for (let s of students) {
    sumGrade += s.grade;

    if (s.grade > grade) {
        grade = s.grade;
        studName = s.name;
    }
}

av = sumGrade / students.length

console.log("Student", studName, "has highest score -", grade)

console.log("Avarage score is", av)