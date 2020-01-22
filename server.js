const express = require('express');
const router = require('./cars/router');

const app = express();

app.use(express.json());
app.use('/api/cars', router);

module.exports = app;