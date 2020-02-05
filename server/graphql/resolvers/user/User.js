const { prisma } = require("../../../prisma/prisma-client");

function nations(parent, args, context, info) {
	return prisma.user({ id: parent.id }).nations();
}

function password(parent, args, context, info) {
	return "REDACTED";
}
module.exports = {
	nations,
	password
};
