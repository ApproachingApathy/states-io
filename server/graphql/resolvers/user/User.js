const { prisma } = require("../../../prisma/prisma-client");

function nations(parent, args, context, info) {
	return prisma.user({ id: parent.id }).nations();
}
module.exports = {
	nations
};
