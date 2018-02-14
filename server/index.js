const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname,'../client/public')));

app.listen(3000, ()=> {
  console.log('Server is up and running on PORT:3000');
})