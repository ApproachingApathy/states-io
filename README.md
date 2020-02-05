# Server

## Writing Resolvers

GraphQl Resolvers are imported from `graphql/root-resolver.js`. The root resolver reads a folder structure of 'resolver modules' and builds the resolvers from the the structure.

A resolver module should contain all the infomation related to a type. Queries, type fields, mutations, are contained in a resolver module and exported to the module's `resolver.js`, then `resolver.js` is programmically imported to the root resolver.

### Resolver Module Folder Structure

```
graphql/
|--resolvers/
|  |--user/ #resolver module
|     |--query.js
|     |--mutation.js
|     |--types.js
|     |--resolver.js (imports query, mutation, and types)
|--root-resolver.js (Automatically imports resolver.js )
```

### resolver.js example

```js
resolvers = {
	Query: require("./query"),
	Mutation: require("./mutation")
};

module.exports = resolvers;
```
