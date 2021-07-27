import React from "react";
import MenuHeader from "../MenuHeader/MenuHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainPageText } from "../MainPageText/MainPageText";
import Authentication from "../Authentication/Index";

export  class Main extends React.Component  {
  constructor(props){
    super(props)

    this.state ={
      isLoggedIn: true
    }
  }

  render() {
    const {isLoggedIn} = this.state
    let logName = isLoggedIn ? "Log out" : "Log in"
    return (
      <Router>
        <MenuHeader logName={logName} />
        <Switch>
          <Route exact path="/">
            <MainPageText />
          </Route>
          {/* <Route  path="/posts">
              <Authentication/>
          </Route> */}
          <Route path="/login">
            <Authentication />
          </Route>
        </Switch>
      </Router>
    );
  }
}
