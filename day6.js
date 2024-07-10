const http = require('http');


const server = http.createServer((req, res) => {

  const url = req.url;

  
  res.setHeader('Content-Type', 'text/plain');

  
  if (url === '/') {
    res.writeHead(200);
    res.end('Hello, World!');
  } else if (url === '/about') {
    res.writeHead(200);
    res.end('About Page');
  } else {
    res.writeHead(404);
    res.end('404 Not Found');
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(` The server dey run  on http://localhost:${port}`);
});
