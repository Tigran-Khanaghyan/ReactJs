import React from "react";
import Login from "./Login";

export default class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
    };
  }

  render() {
    return (
      <Login
        handleName={this.props.handleName}
        handlePassword={this.props.handlePassword}
        createUser={this.props.createUser}
      />
    );
  }
}
