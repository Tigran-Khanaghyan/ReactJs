import React from "react";
import MenuHeader from "../MenuHeader/MenuHeader";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { MainPageText } from "../MainPageText/MainPageText";
import Authentication from "../Authentication/Index";
import CreatePost from "../createPost/CreatePost";


export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return (
      <Router>
        <MenuHeader/>
        <Switch>
          <Route exact path="/">
            <MainPageText />
          </Route>
           
          <Route path="/login">
            <Authentication />
          </Route>
          <Route  to={{pathname: "/posts" }}render={() => (this.state.isLoggedIn ? (<CreatePost/>) : (<Redirect to="/login"/>))}/>
        </Switch>
      </Router>
    );
  }
}
