const {createError} = require('../utils').http

exports.isAuthenticated = (req, _, next) => {
    if (req.session.user) {
	next()
    } else {
	const err = createError(401, 'You need to log in')	
	next(err)
    }
}

exports.isNotAuthenticated = (req, _, next) => {
    if (req.session.user) {
	const err = createError(403, 'Unauthorized access')
	next(err)
    } else {
	next()
    }
}
