const app = express();
import express from 'express';

const PORT = process.env.PORT  || 8080;

///*
//onst server = http.createServer((req, res) => {
//   if (req.url === '/') {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.end('<h1>HomePage</h1>');
//     }  else if(req.url === '/about') {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.end('<h1>About</h1>');
//     } else if(req.url === '/contact-me') {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.end('<h1>Contact here!</h1>');
//     } else {
//           res.writeHead(404, {'Content-Type': 'text/html'});
//           res.end('<h1>Not found</h1>');
//     }
//);
//

app.get('/', (req, res) => {
    res.send('<h1>Homepage</h1>');
  });
  app.get('/about', (req, res) => {
    res.send('<h4>My about page!</h4>');
  });
  app.get('/contact-me', (req, res) => {
    res.send('<h3>Contact me here!</h3>');
  });
  app.all('*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
  });
  

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});