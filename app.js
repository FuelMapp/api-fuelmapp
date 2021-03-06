require('dotenv').config();
require('./config/db.js')
const express = require('express');
const logger = require('morgan');
const cors = require('cors')
const session = require('./config/session.js')
const app = express();


// Middlewares
const isDev = app.get('env') === 'development'
if (isDev) {
    app.use(logger('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session)

// Route requests
const routes = require('./routes')
const handleHttpErrors = require('./middlewares/handleError.js')
app.use('/users', routes.users)
app.use(handleHttpErrors)

module.exports = app;
