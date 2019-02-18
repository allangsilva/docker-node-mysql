'use strict';

const express = require('express');
const mysql = require('mysql');

// Constants defined 
const { PORT, HOST } = process.env;

// App
const app = express();
app.get('/', (req, res) => {
  res.send({
    PORT,
    HOST
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);