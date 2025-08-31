// Pick a number → e.g., 19.
// Square each digit and sum them → 1² + 9² = 1 + 81 = 82.
// Repeat with the new number → 8² + 2² = 64 + 4 = 68.
// Keep going until: You reach 1 → number is happy .

// Function to check if a number is a happy number
function happy_number(num) {
    var m, n;
    var c = [];

    // Continue loop until the number becomes 1 or enters a cycle
    while (num !== 1 && c[num] !== true) {
        c[num] = true;
        m = 0;

        // Calculate the sum of the squares of digits
        while (num > 0) {
            n = num % 10;
            m += n * n;
            num = (num - n) / 10;
        }

        num = m;
    }

    return (num === 1);
}

// // Variables to track the count and current number
// var cnt = 5;
// var num = 1;
// var f5 = '';

// // Find the first 5 happy numbers
// while (cnt-- > 0) {
//     while (!happy_number(num))
//         num++;

//     f5 = f5 + (num + ", ");
//     num++;
// }
// console.log('First 5 happy numbers are: ' + f5); 


// function isHappy(n) {
//     let seen = new Set();
//     while (n !== 1 && !seen.has(n)) {
//         seen.add(n);
//         n = n.toString().split('').reduce((sum, d) => sum + d * d, 0);
//     }
//     return n === 1;
// }

// let count = 0, num = 1;
// while (count < 5) {
//     if (isHappy(num)) {
//         console.log(num);
//         count++;
//     }
//     num++;
// }