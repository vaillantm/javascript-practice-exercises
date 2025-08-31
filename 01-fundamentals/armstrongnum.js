// Write a JavaScript program to find the Armstrong numbers of 3 digits.

// Note : An Armstrong number of three digits is an integer such that 
// the sum of the cubes of its digits is equal to the number itself.
//  For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.
// Function to find and print three-digit Armstrong numbers

function three_digit_armstrong_number() {
    for (var i = 1; i < 10; ++i) {
        for (var j = 0; j < 10; ++j) {
            for (var k = 0; k < 10; ++k) {
                // Calculate the cube of each digit and sum them
                var pow = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
                // Calculate the number formed by the digits
                var plus = i * 100 + j * 10 + k;

                // Check if the sum of cubes is equal to the number
                if (pow === plus) {
                    console.log(pow);
                }
            }
        }
    }
}

// Call the function to find three-digit Armstrong numbers
three_digit_armstrong_number(); 
