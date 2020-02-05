const { prisma } = require("../../../prisma/prisma-client");
function nations(parent, args, context, info) {
	return prisma.nations();
}

function nation(parent, args, context, info) {
	return prisma.nation({ id: args.id });
}

module.exports = {
	nations,
	nation
};
