const express = require('express');
require('dotenv').config()

const app = require('./app')
const port = process.env.PORT || '8080';

try {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
} catch(err) {
  console.log(err)
}
