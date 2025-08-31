const x = 3, y = -7, z = -2;

// Method 1: Direct conditional checks
function method1(x, y, z) {
  if (x > 0 && y > 0 && z > 0) {
    console.log(" Method 1: The sign is +");
  } else if (x < 0 && y < 0 && z < 0) {
    console.log(" Method 1: The sign is -");
  } else if ((x < 0 && y < 0) || (y < 0 && z < 0) || (x < 0 && z < 0)) {
    console.log(" Method 1: The sign is +");
  } else {
    console.log(" Method 1: The sign is -");
  }
}

// Method 2: Count negative numbers
function method2(x, y, z) {
  const nums = [x, y, z];
  const negatives = nums.filter(n => n < 0).length;
  const sign = negatives % 2 === 0 ? "+" : "-";
  console.log(` Method 2: The sign is ${sign}`);
}

// Method 3: Multiply and use Math.sign
function method3(x, y, z) {
  const product = x * y * z;
  const sign = Math.sign(product);
  console.log(` Method 3: The sign is ${sign === 0 ? "0" : sign > 0 ? "+" : "-"}`);
}

// Method 4: Bitwise logic (advanced)
function method4(x, y, z) {
  const product = x * y * z;
  const sign = (product >> 31) & 1 ? "-" : "+";
  console.log(` Method 4: The sign is ${product === 0 ? "0" : sign}`);
}

// Method 5: Logical XOR of negatives
function method5(x, y, z) {
  const isNegative = [x, y, z].map(n => n < 0);
  const negativeCount = isNegative.reduce((acc, val) => acc + val, 0);
  const sign = negativeCount % 2 === 0 ? "+" : "-";
  console.log(` Method 5: The sign is ${sign}`);
}

// Run all methods
method1(x, y, z);
method2(x, y, z);
method3(x, y, z);
method4(x, y, z);
method5(x, y, z);
