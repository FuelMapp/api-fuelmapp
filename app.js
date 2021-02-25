require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors')
const app = express();


// Middlewares
const isDev = app.get('env') === 'development'
if (isDev) {
    app.use(logger('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route requests
const routes = require('./routes')
app.use('/users', routes.users)

module.exports = app;
