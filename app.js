'use strict';

const express = require('express');
const mysql = require('mysql');

// Constants defined 
const { PORT, HOST, DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env;

// App
const app = express();
app.get('/', (req, res) => {
  res.send({
    PORT,
    HOST,
    DB_HOST,
    DB_NAME,
    DB_USER,
    DB_PASS
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);