// Sum of Multiples of 3 and 5 under 100
// Write a JavaScript program to sum 3 and 5 multiples under 100.

// Variable to store the sum of numbers divisible by 3 or 5
var sum = 0;

// Loop through numbers from 0 to 999
for (var x = 0; x < 100; x++) {
    // Check if the current number is divisible by 3 or 5
    if (x % 3 === 0 || x % 5 === 0) {
        // Add the current number to the sum
        sum += x;
    }
}

// Output the final sum
console.log(sum); 

//Shorter and easier way to do it

// let sum = 0;
// for (let i = 0; i < 100; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;
// console.log(sum);



// // Sum of Multiples of 3 and 5 under 100 using a function
// function summult(limit) {
//     let sum = 0;
//     for (let i = 0; i < limit; i++) {
//         if (i % 3 === 0 || i % 5 === 0) sum += i;
//     }
//     return sum;
// }

// console.log(summult(100));


//function and array
// Sum of Multiples of 3 and 5 under 100 using a function and array

// function summult(limit) {
//     var arr = [];
//     var sum = 0;
//     for (var i = 0; i < limit; i++) {
//         arr.push(i);           // fill the array
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;          // add multiples of 3 or 5
//         }
//     }
//     return sum;
// }
// console.log(summult(100));