const jwt = require("jsonwebtoken");
const { prisma } = require("../prisma/prisma-client");
function verifyToken(token) {
	if (token === "") return null;
	const decoded = jwt.verify(token, process.env.JWT_SECRET);

	return prisma.user({ id: decoded.id });
}

module.exports = {
	verifyToken
};
