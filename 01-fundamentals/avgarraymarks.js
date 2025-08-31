// Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.


// Student Name	Marks
// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68
// The grades are computed as follows :

// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100A

let students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
let avg = 0;
for (let i = 0; i < students.length; i++) {
    avg += students[i][1];
}

avg = avg / students.length;
console.log('Average marks: ' + avg);

if (avg < 60) {
    console.log("Grade: F");
} else if (avg < 70) {
    console.log("Grade: D");
} else if (avg < 80) {
    console.log("Grade: C");
} else if (avg < 90) {
    console.log("Grade: B");
} else if (avg <= 100) {
    console.log("Grade: A");
} else {
    console.log("Invalid marks");
}



// // Compute average and grade without using an array

// let david = 80;
// let vinoth = 77;
// let divya = 88;
// let ishitha = 95;
// let thomas = 68;

// let total = david + vinoth + divya + ishitha + thomas;
// let avg = total / 5;

// console.log('Average marks: ' + avg);

// if (avg < 60) {
//     console.log("Grade: F");
// } else if (avg < 70) {
//     console.log("Grade: D");
// } else if (avg < 80) {
//     console.log("Grade: C");
// } else if (avg < 90) {
//     console.log("Grade: B");
// } else if (avg <= 100) {
//     console.log("Grade: A");
// } else {
//     console.log("Invalid marks");