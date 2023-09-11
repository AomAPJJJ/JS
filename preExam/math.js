// Define a function to generate a random integer within a specified range
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Generate a random number between 25 and 100 and store it in 'rand'
  const rand = randomNumber(25, 100);
  console.log(rand); // Output the random number
  
  // Generate random numbers in other ranges
  const rand2 = randomNumber(1, 10);
  const rand3 = randomNumber(20, 100);
  console.log('----');
  
  // Examples of rounding numbers using Math.round()
  console.log(Math.round(3.1)); // 3
  console.log(Math.round(3.4)); // 3
  console.log(Math.round(3.5)); // 4
  console.log(Math.round(3.7)); // 4
  console.log('----');
  
  // Examples of flooring numbers using Math.floor()
  console.log(Math.floor(3.1)); // 3
  console.log(Math.floor(3.4)); // 3
  console.log(Math.floor(3.5)); // 3
  console.log(Math.floor(3.7)); // 3
  console.log('----');
  
  // Examples of ceiling numbers using Math.ceil()
  console.log(Math.ceil(3.1)); // 4
  console.log(Math.ceil(3.4)); // 4
  console.log(Math.ceil(3.5)); // 4
  console.log(Math.ceil(3.7)); // 4
  
  // Other mathematical functions
  console.log(Math.PI); // Output the value of Pi
  console.log(Math.pow(2, 5)); // Calculate 2^5 and output the result (32)
  console.log(Math.sqrt(9)); // Calculate the square root of 9 and output the result (3)
  