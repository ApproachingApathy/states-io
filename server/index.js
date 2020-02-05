require("dotenv").config();

const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");

const resolvers = require("./graphql/root-resolver");
const authHelper = require("./helpers/auth");

const schema = gql(fs.readFileSync("graphql/schema.graphql", "utf8"));

server = new ApolloServer({
	typeDefs: schema,
	resolvers,
	context: ({ req }) => {
		const token = req.headers.authorization || "";

		user = authHelper.verifyToken(token);

		return { user };
	}
	// tracing: true
});

server
	.listen({
		port: process.env.PORT || 4000
	})
	.then(({ url }) => {
		console.log(`Server Started at ${url}`);
	});
