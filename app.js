const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.get('/contact-me', (req, res) => {
  res.sendFile(__dirname + '/contact-me.html');
});

// Future reference: put this wildcard route last as a 'catch all' to display 404 page
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/404.html');
});

app.listen(port, () => {
  console.log(`Express app listening on port ${3000}`);
});
