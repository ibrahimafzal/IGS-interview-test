const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req,res) => {
  res.send(`<h1>Hello Node Server</h1>`)
})

app.listen(port, () =>{
  console.log('server is running on port 8080');
})