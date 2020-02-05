const { prisma } = require("../../../prisma/prisma-client");

function owner(parent, args, context, info) {
	return prisma.nation({ id: parent.id }).owner();
}
module.exports = {
	owner
};
