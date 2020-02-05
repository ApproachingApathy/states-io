const { prisma } = require("../../../prisma/prisma-client");
const bcrypt = require("bcrypt");

async function createUser(parent, args, context, info) {
	data = {
		...args.data,
		password: await bcrypt.hash(args.data.password, 10)
	};
	return prisma.createUser(data);
}

function deleteUser(parent, args, context, info) {
	return prisma.deleteUser({ id: args.id });
}

module.exports = {
	createUser,
	deleteUser
};
