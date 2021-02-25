const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const userSchema = new mongoose.Schema({
        username: {
			type: String,
			required: [true, 'Username is required'],
			unique: [true, 'This username is unavailable'],
			maxlength: [12, 'Character limit: 12'],
			trim: true,
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			unique: [true, 'Invalid email address'],
			match: [EMAIL_PATTERN, 'Invalid email address'],
		},
		password: {
			type: String,
			required: [true, 'Password missing'],
			trim: true,
		},
        avatar: {
            type: String,
            default: 'https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png'
        }
},
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (document, toReturn) => {
                toReturn.id = document._id;
                delete toReturn.password
                delete toReturn._id;
				delete toReturn.__v;
				delete toReturn.createdAt;
				delete toReturn.updatedAt;
				return toReturn;
            }
        }
    }
)

userSchema.pre('save', function (next) {
	if (this.isModified('password')) {
		bcrypt
			.hash(this.password, 10)
			.then(hash => {
				this.password = hash;
				next();
			})
			.catch(next);
	} else {
		next();
	}
});

userSchema.methods.checkPassword = function (password) {
	return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema)
module.exports = User
