const mongoose = require('mongoose')
const DB_URI = process.env.DB_URI || 'mongodb://127.0.0.1:27017/fuelmapp'

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}

mongoose
    .connect(DB_URI, options)
    .then(() => console.info(`DB connected at ${DB_URI}`))
    .catch(console.error)

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.info('Closing db connection on app termination')
        process.exit(0)
    })
})
