import React from "react";
import {
  validateConfirm,
  validateEmail,
  validatePassword,
} from "../helpers/validate";
import "./login.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      isEmailCorrect: false,
      isPasswordCorrect: false,
      isConfirmMatch: false,
      emailErrorMessage: "",
      passwordErrorMessage: "",
      confirmErrorMessage: "",
      disableSubmit: true,
    };
  }

  handleChangeEvent = (event) => {
    if (event.target.name === "email") {
      validateEmail(event, this);
    }
    if (event.target.name === "password") {
      validatePassword(event, this);
    }
    if (event.target.name === "confirm") {
      validateConfirm(event, this);
    }
  };

  render() {
    return (
      <div className="wrapper">
        <form>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              onChange={this.handleChangeEvent}
              required
            />
            <p>{this.state.emailErrorMessage}</p>
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChangeEvent}
              required
            />
            <p>{this.state.passwordErrorMessage}</p>
          </div>
          <div>
            <input
              name="confirm"
              type="password"
              placeholder="Confirm password"
              onChange={this.handleChangeEvent}
              required
            />
            <p>{this.state.confirmErrorMessage}</p>
          </div>
          <div>
            <div></div>
            <input name="submit" type="submit" value="Signup" />
          </div>
        </form>
      </div>
    );
  }
}
