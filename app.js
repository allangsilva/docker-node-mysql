'use strict';

const express = require('express');
const mysql = require('mysql');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const DB_HOST = 'default';
const DB_USER = 'default';
const DB_PASSWORD = 'default';

//Connection with database
var con = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);