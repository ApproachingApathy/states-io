const { prisma } = require("../../../prisma/prisma-client");

async function createNation(parent, args, context, info) {
	data = {
		...args.data,
		population: 1000000,
		owner: { connect: { id: args.data.owner } }
	};
	console.log(data);
	return prisma.createNation(data);
}

function deleteNation(parent, args, context, info) {
	return prisma.deleteNation({ id: args.id });
}

module.exports = {
	createNation,
	deleteNation
};
