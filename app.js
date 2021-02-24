require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors')
const app = express();

const isDev = app.get('env') === 'development'

// enable morgan logger on development
if (isDev) {
    app.use(logger('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
