//Write a Node.js program to demonstrate use of path, fs, os and util module.

const path = require('path');
const fs = require('fs');
const os = require('os');
const util = require('util');

// Using the path module to join paths
const filePath = path.join(__dirname, 'example.txt');

// Using the fs module to write to a file
fs.writeFile(filePath, 'This is an example text.', (err) => {
  if (err) throw err;
  console.log('File has been written.');

  // Using the fs module to read from a file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);

    // Using the os module to print system information
    console.log('System information:');
    console.log(`Platform: ${os.platform()}`);
    console.log(`CPU architecture: ${os.arch()}`);
    console.log(`Number of CPUs: ${os.cpus().length}`);
    console.log(`Total memory: ${os.totalmem()} bytes`);
    console.log(`Free memory: ${os.freemem()} bytes`);
    console.log(`Uptime: ${os.uptime()} seconds`);

    // Using the util module to promisify fs.readFile
    const readFileAsync = util.promisify(fs.readFile);
    readFileAsync(filePath, 'utf8')
      .then((data) => {
        console.log('File content (read with promisify):', data);
      })
      .catch((err) => {
        console.error('An error occurred:', err);
      });
  });
});
