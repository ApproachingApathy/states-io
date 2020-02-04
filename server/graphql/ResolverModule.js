class ResolverModule {
	constructor(obj) {
		this.Query = { ...obj.Query };
		this.Mutation = { ...obj.Mutation };
	}

	createResolverObject() {
		return {
			Query: { ...this.Query },
			Mutation: { ...this.Mutation }
		};
	}
}
