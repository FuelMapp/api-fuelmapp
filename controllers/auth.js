const User = require('../models/users.js')

exports.login = async (req, res, next) => {
    const {email, password} = req.body

    if (!email || !password) {
	throw new Error('ree')
    }
    
    try {
	const user = await User.findOne({email})
	if (!user) {
	    throw new Error('raa')
	}

	const isMatch = await user.checkPassword(password)
	if (!isMatch) {
	    throw new Error('rii')
	} else {
	    req.session.user = user
	    res.json(user)
	}
    }
    catch (err){
	// TODO: check proper status code
	err.status = 400
	next(err)
    }
}

exports.logout = (req, res, next) => {
    req.session.destroy()
    req.status(204).send('Successfull logout')
}
