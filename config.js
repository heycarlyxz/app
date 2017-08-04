const http = require('http');
const fs = require('fs');

//define hostname, port
const hostname = '127.0.0.1';
const port = '3000';

//load index.html as default file
fs.readFile('index.html', (error, html) => {
  //if there is an error, throw error message
  if(error){
    throw error;
  }
  //else, start the server
  else{
    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text-/html'); //parse content as html
      res.write(html);
      res.end();
    });

    server.listen(port, hostname, () => {
      console.log(`Server started on port ${port}`);
    });
  }
});
