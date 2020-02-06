import React from "react";

import LoginFormComponent from "../../components/login/login.component";

export default class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<div className="login-page">
					<LoginFormComponent />
				</div>
			</React.Fragment>
		);
	}
}
