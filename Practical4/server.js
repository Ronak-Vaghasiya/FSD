const http = require('http');

const hostname = '127.0.1.3';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
