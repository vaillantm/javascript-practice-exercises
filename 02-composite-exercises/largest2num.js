// Example numbers
let num1 = 50;
let num2 = 120;

// 1️⃣ Using Math.max()
let max1 = Math.max(num1, num2);
console.log("Using Math.max():", max1);

// 2️⃣ Using Conditional (Ternary) Operator
let max2 = num1 > num2 ? num1 : num2;
console.log("Using Ternary Operator:", max2);

// 3️⃣ Using Math.max() with Spread Syntax
let max3 = Math.max(...[num1, num2]);
console.log("Using Spread Syntax:", max3);
