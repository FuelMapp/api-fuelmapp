const User = require('../models/users.js')

exports.getUsers = async (req, res, next) => {
    try {
	const users = await User.find()
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
	err.status = 422
	next(err)
    }
}
