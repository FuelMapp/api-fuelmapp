const User = require('../models/users.js')

exports.getUsers = async (req, res, next) => {
    const query = req.query || {}

    try {
	const users = await User.find(query)
	res.json(users)
    }
    catch (err) {
	next(err)
    }
}

exports.createUser = async (req, res, next) => {
    const {username, email, password} = req.body

    try {
	const newUser = await User.create({username, email, password})
	res.json(newUser)
    }
    catch (err) {
	err.status = 400
	next(err)
    }
}

exports.updateUser = async (req, res, next) => {
    const {user: currentUser} = req.session
    const {username, email, password} = req.body

    try {
    }
    catch {

    }
}
