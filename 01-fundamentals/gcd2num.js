// GCD of Two Numbers
// Write a JavaScript program to compute the greatest common 
// divisor (GCD) of two positive integers.

let a = 2154; // First number
let b = 458;  // Second number

// Euclidean algorithm (using modulo, more efficient)
function gcd(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

console.log(gcd(a, b));