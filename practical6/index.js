// Node.js program to demonstrate the use of various conditional statements

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Please enter a number: ', number => {
    const num = parseInt(number);
  
    if (num > 0) {
      console.log(`${num} is positive.`);
    }
    else if (num < 0) {
      console.log(`${num} is negative.`);
    }
    else {
      console.log('You have entered zero.');
    }
  
    switch (num % 2) {
      case 0:
        console.log(`${num} is even.`);
        break;
      case 1:
        console.log(`${num} is odd.`);
        break;
      default:
        console.log('Invalid number.');
    }
  
    readline.close();
  });
  