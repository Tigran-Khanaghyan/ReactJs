import MenuHeader from "../MenuHeader/MenuHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "../Login/Login";
import { MainPageText } from "../MainPageText/MainPageText";

export function Main() {
  return (
    <Router>
      <MenuHeader />
      <Switch>
        <Route exact path="/">
          <MainPageText />
        </Route>
        <Route  path="/posts">
            <LogIn/>
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
}
