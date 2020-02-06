import React from "react";
import { ApolloConsumer } from "@apollo/react-hooks";

/** Returns a React Component Wrapped in an Apollo Consumer.
 *
 * @param {React.Component} Component
 */
export default function MapApolloToProps(Component) {
	return props => {
		return (
			<ApolloConsumer>
				{client => <Component {...props} apolloClient={client} />}
			</ApolloConsumer>
		);
	};
}
