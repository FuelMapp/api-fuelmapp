const expressSession = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo').default
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017'

const store = MongoStore.create({
    mongoUrl: DB_URI
})

const session = expressSession({
    store,
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: true,
    cookie: {
	    secure: process.env.SESSION_SECURE,
	    sameSite: process.env.SESSION_SAMESITE || true,
	    httpOnly: true,
	    maxAge: Number(process.env.SESSION_MAX_AGE),
    },
});

module.exports = session
