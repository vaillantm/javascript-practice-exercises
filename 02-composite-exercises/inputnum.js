// Method 1: Using process.stdin
function method1() {
  process.stdout.write("Method 1 - Enter a number: ");
  process.stdin.once("data", data => {
    const num = parseInt(data.toString().trim(), 10);
    console.log(` Method 1: You entered integer ${num}`);
    method2();
  });
}

// Method 2: Using readline
function method2() {
  const readline = require('readline');
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  rl.question("Method 2 - Enter a number: ", input => {
    const num = Number(input);
    console.log(` Method 2: Parsed integer is ${Math.floor(num)}`);
    rl.close();
    method3();
  });
}

// Method 3: Using command-line arguments
function method3() {
  const arg = process.argv[2];
  const num = parseInt(arg, 10);
  if (isNaN(num)) {
    console.log(" Method 3: Please pass a valid number as a command-line argument.");
  } else {
    console.log(` Method 3: CLI input converted to integer: ${num}`);
  }
}

// Start the chain
method1();
