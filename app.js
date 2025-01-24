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

app.get("/", (req, res) => res.send("Hello, world!"));
app.get("/about", (req, res) => res.send("Hello, D!"));
app.get("/contact-me", (req, res) => res.send("Hello, D!"));
app.get("/about", (req, res) => res.send("Hello, D!"));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});