import React from "react";
import { ApolloClient, gql } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

import LoginPage from "./pages/login/login.page";

import "./global.css";
import "./App.css";

function App() {
	console.log("hello");
	const cache = new InMemoryCache();
	const link = new HttpLink({
		uri: "http://localhost:4000"
	});

	const client = new ApolloClient({
		link,
		cache
	});

	return (
		<ApolloProvider client={client}>
			<div className="App container-column justify-center">
				<LoginPage />
			</div>
		</ApolloProvider>
	);
}

export default App;
