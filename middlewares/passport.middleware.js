const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('../config/config')
const UserModel = require('../models/user.model')

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: config.JWT_ACCESS_SECRET,
}

module.exports = passport => {
	passport.use(
		new JwtStrategy(options, async (payload, done) => {
			try {
				const user = await UserModel.findById(payload.id).select('email id')
				if (user) {
					return done(null, user);
				} else {
					return done(null, false);
				}
			} catch (e) {
				console.log(e)
			}
	}));
}
