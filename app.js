'use strict';

//const http = require('http');
const express = require('express');

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

app.listen(PORT || 80, HOST || '0.0.0.0');
console.log(`Running on http://${HOST || 'localhost'}:${PORT || 80}`);