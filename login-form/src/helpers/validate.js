export function validateEmail(event, obj) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let isEmail = regex.test(String(event.target.value).toLowerCase());
  if (!isEmail) {
    obj.setState({ emailErrorMessage: "Email is not valid" });
  } else {
    obj.setState({
      isEmailCorrect: true,
      email: event.target.value,
      emailErrorMessage: "",
    });
  }
}

export function validatePassword(event, obj) {
  let input = String(event.target.value);
  let regex =
    /(\d+)([A-Z]+)([a-z]+)|(\d+)([a-z]+)([A-Z]+)|([A-Z]+)([a-z]+)(\d+)|([A-Z]+)(\d+)([a-z]+)|(([a-z]+)([A-Z]+)(\d+))|(([a-z]+)(\d+)([A-Z]+))/;
  let isValid = regex.test(input);
  if (input.length < 7 || isValid === false) {
    obj.setState({ passwordErrorMessage: "Password is not valid" });
  } else {
    obj.setState({
      isPasswordCorrect: true,
      password: event.target.value,
      passwordErrorMessage: "",
    });
  }
}

export function validateConfirm(event, obj) {
  if (event.target.value !== obj.state.password) {
    obj.setState({
      confirmErrorMessage: "Password`s are not match",
    });
  } else {
    obj.setState({
      isConfirmMatch: true,
      confirmErrorMessage: "",
    });
  }
}
