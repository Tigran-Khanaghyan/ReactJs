import React from "react";
import MenuHeader from "../MenuHeader/MenuHeader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { MainPageText } from "../MainPageText/MainPageText";
import Authentication from "../Authentication/Index";
import CreatePost from "../createPost/CreatePost";
import setLocalStorageSItems from "../../helpers/setLocalStorageSItems";
export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      isLoggedIn: false,
    };
  }

  handleName = (event) => {
    let name = event.target.value;
    this.setState({ name });
  };

  handlePassword = (event) => {
    let password = event.target.value;
    this.setState({ password });
  };

  createUser = () => {
    let { name, password } = this.state;
    if (name.trim() && password.trim()) {
      this.setState({ isLoggedIn: true });
      setLocalStorageSItems(name, password);
    }
  };

  render() {
    return (
      <Router>
        <MenuHeader />
        <Switch>
          <Route exact path="/">
            <MainPageText />
          </Route>

          <Route path="/login">
            <Authentication
              handleName={this.handleName}
              handlePassword={this.handlePassword}
              createUser={this.createUser}
            />
          </Route>
          <Route
            to={{ pathname: "/posts" }}
            render={() =>
              this.state.isLoggedIn ? <CreatePost /> : <Redirect to="/login" />
            }
          />
        </Switch>
      </Router>
    );
  }
}
