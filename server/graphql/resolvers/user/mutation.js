const { prisma } = require("../../../prisma/prisma-client");

function createUser(parent, args, context, info) {
	return prisma.createUser(args.data);
}

function deleteUser(parent, args, context, info) {
	return prisma.deleteUser({ id: args.id });
}

module.exports = {
	createUser,
	deleteUser
};
