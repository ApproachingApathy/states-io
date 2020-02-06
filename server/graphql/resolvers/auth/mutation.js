const { prisma } = require("../../../prisma/prisma-client");
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function authLogin(parent, args, context, info) {
	const authPromise = new Promise(async (resolve, reject) => {
		const user = await prisma.user({ email: args.email });
		if (user != null) {
			bcyrpt.compare(args.password, user.password, (err, isMatch) => {
				if (err) reject(err);
				else if (isMatch) {
					token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
						expiresIn: "14d"
					});
					resolve({ user, isMatch, token });
				} else resolve({ user: null, isMatch, token: null });
			});
		} else {
			resolve({ user: null, isMatch: false, token: null });
		}
	})
		.then(obj => {
			return {
				user: obj.user,
				isLoginSuccessful: obj.isMatch,
				error: obj.isMatch ? "" : "Email or password incorrect",
				token: obj.token
			};
		})
		.catch(err => ({
			user: null,
			isLoginSuccessful: false,
			error: "An error occured, try again later.",
			token: null
		}));

	return authPromise;
}

module.exports = {
	authLogin
};
