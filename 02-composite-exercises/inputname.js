// Method 1: Using process.stdin (basic)
function method1() {
  process.stdout.write("Method 1 - Enter your name: ");
  process.stdin.once("data", data => {
    const name = data.toString().trim();
    console.log(`Hello, ${name}! You're using Method 1.`);
    method2(); // Chain to next method
  });
}

// Method 2: Using readline module
function method2() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Method 2 - What's your name? ", name => {
    console.log(` Hey ${name}, Method 2 says hi!`);
    rl.close();
    method3(); // Chain to next method
  });
}

// Method 3: Using readline + async/await
async function method3() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const ask = question => new Promise(resolve => rl.question(question, resolve));
  const name = await ask("Method 3 - Tell me your name: ");
  console.log(` Greetings, ${name}! Method 3 welcomes you.`);
  rl.close();
  method4(); // Chain to next method
}

// Method 4: Using command-line arguments
function method4() {
  const name = process.argv[2];
  if (name) {
    console.log(`🚀 Hello ${name}, from Method 4 via CLI args!`);
  } else {
    console.log(" Method 4 skipped: No name passed as argument.");
  }
}

// Start the chain
method1();
