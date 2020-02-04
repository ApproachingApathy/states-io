const fs = require("fs");
const path = require("path");
const resolverModulesPath = path.resolve(
	process.env.RESOLVER_MODULES_DIR || "graphql/resolvers"
);

const dir = fs.readdirSync(resolverModulesPath);
let resolversArray = [];
dir.forEach(resolverModuleDirectory => {
	fullResolverModulePath = path.join(
		resolverModulesPath,
		resolverModuleDirectory,
		"resolver.js"
	);

	if (fs.existsSync(fullResolverModulePath)) {
		let resolverModule;
		try {
			resolverModule = require(fullResolverModulePath);
		} catch (error) {
			console.log(
				'An error occurred while reading resolver functions. \n Each resolver module should be a folder with a "resolver.js" file.'
			);
			console.log(error);
			resolverModule = null;
		} finally {
			resolversArray.push(resolverModule);
		}
	} else {
		console.log(`No resolver file found at ${fullResolverModulePath}`);
	}
});

console.log(resolversArray);

let rootResolver = {};
resolversArray.forEach(resolverModuleObj => {
	Object.keys(resolverModuleObj).forEach(key => {
		if (key in rootResolver) {
			rootResolver[key] = {
				...rootResolver[key],
				...resolverModuleObj[key]
			};
		} else {
			rootResolver[key] = { ...resolverModuleObj[key] };
		}
	});
});

console.log(rootResolver);

// console.log(dir);
