import React from "react";
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
  componen() {
    this.disableSubmit();
  }
  disableSubmit = () => {
    if (isEmailCorrect && isPasswordCorrect && isConfirmMatch) {
      this.setState({ disableSubmit: false });
    } else {
      this.setState({ disableSubmit: false });
    }
  };

  handleChangeEvent = (event) => {
    if (event.target.name === "email") {
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let isEmail = regex.test(String(event.target.value).toLowerCase());
      if (!isEmail) {
        this.setState({ emailErrorMessage: "Email is not valid" });
      } else {
        // this.disableSubmit();
        this.setState({
          isEmailCorrect: true,
          email: event.target.value,
          emailErrorMessage: "",
        });
      }
    }
    if (event.target.name === "password") {
      let input = String(event.target.value);
      let regex =
        /(\d+)([A-Z]+)([a-z]+)|(\d+)([a-z]+)([A-Z]+)|([A-Z]+)([a-z]+)(\d+)|([A-Z]+)(\d+)([a-z]+)|(([a-z]+)([A-Z]+)(\d+))|(([a-z]+)(\d+)([A-Z]+))/;
      let isValid = regex.test(input);
      if (input.length < 7 || isValid === false) {
        this.setState({ passwordErrorMessage: "Password is not valid" });
      } else {
        // this.disableSubmit();
        this.setState({
          isPasswordCorrect: true,
          password: event.target.value,
          passwordErrorMessage: "",
        });
      }
    }
    if (event.target.name === "confirm") {
      if (event.target.value !== this.state.password) {
        this.setState({
          confirmErrorMessage: "Password`s are not match",
        });
      } else {
        // this.disableSubmit();
        this.setState({
          isConfirmMatch: true,
          confirmErrorMessage: "",
        });
      }
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
            <input
              disabled={this.state.disableSubmit}
              name="submit"
              type="submit"
              value="Signup"
            />
          </div>
        </form>
      </div>
    );
  }
}
