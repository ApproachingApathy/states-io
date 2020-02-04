const { prisma } = require("../../../prisma/prisma-client/");

function users(parent, args, context, info) {
	return prisma.users();
}

function user(parent, args, context, info) {
	return prisma.user(args.id);
}

module.exports = {
	users,
	user
};
