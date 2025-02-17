const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
  const name = req.body.name;
  res.send(Hello, {name}); 
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});