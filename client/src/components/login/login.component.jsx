import React from "react";
import { gql } from "apollo-boost";

import { MapApolloToProps } from "../../utils/index";

import "./login.component.css";
import "../../global.css";

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValues: {}
		};
	}

	handleTextInput(e) {
		this.setState({
			...this.state,
			inputValues: {
				...this.state.inputValues,
				[e.target.name]: e.target.value
			}
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const email = this.state.inputValues.email;
		const password = this.state.inputValues.password;

		const query = gql(`
		    mutation {
		        authLogin(email: "${email}", password: "${password}") {
                    isLoginSuccessful
                    token
                    error
                    user {
                        username
                    }
		        }
		    }
		`);

		this.props.apolloClient
			.mutate({
				mutation: query
			})
			.then(result => console.log(result))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<React.Fragment>
				<div
					id="login-form-container"
					className="container-column justify-center login-form-container "
				>
					<form
						id="login-form"
						className="container-column justify-center login-form"
					>
						<input
							type="text"
							name="email"
							id="input-email"
							value={this.state.inputValues.email || ""}
							onChange={e => this.handleTextInput(e)}
						/>
						<input
							type="password"
							name="password"
							id="input-password"
							value={this.state.inputValues.password || ""}
							onChange={e => this.handleTextInput(e)}
						/>
						<div className="login-form_buttons">
							<button
								type="submit"
								onClick={e => this.handleSubmit(e)}
							>
								Login
							</button>
							<input
								type="checkbox"
								name="input_stay_logged"
								id="input-stay-logged"
								value={this.state.inputValues.input_stay_logged}
							/>
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

export default MapApolloToProps(LoginForm);
