const User = require('../models/users.js')

exports.getUsers = async (req, res, next) => {
    const users = await User.find()
    res.json(users)
}

exports.createUser = async (req, res, next) => {
    const {username, email, password} = req.body

    const newUser = await User.create({username, email, password})
    res.json(newUser)
}
