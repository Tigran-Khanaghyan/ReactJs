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
import setLocalStorageItems from "../../helpers/setLocalStorageSItems";
import { Posts } from "../posts/Posts";
import addPosts from "../../helpers/addPostsIntoLocalStorage";
import findUser from "../../helpers/findUniqueUser"

let userId = null;
export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
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
    userId = String(Date.now());
    let { name, password } = this.state;
    let existingUser = findUser(name, password)
    if (!existingUser && name.trim() && password.trim()) {
      this.setState({ isLoggedIn: true });
      setLocalStorageItems(userId, name, password);
    }
    if(existingUser && name.trim() && password.trim()){
      userId = findUser(name, password)[1]
      this.setState({ isLoggedIn: true });
    }
  };

  handleTitle = (event) => {
    let title = event.target.value;
    this.setState({ title });
  };

  handleContent = (event) => {
    let content = event.target.value;
    this.setState({ content });
  };

  createPost = () => {
    const { title, content } = this.state;

    let userInfo = localStorage.getItem(userId);
    let user = JSON.parse(userInfo);

    if (title.trim() && content.trim()) {
      let post = { title, content };
      user.posts.push(post);
      addPosts(userId, user);
    }
    return;
  };

  render() {
    let { isLoggedIn } = this.state;
    return (
      <Router>
        <MenuHeader refLink={isLoggedIn ? "/createPost" : "/login"} />
        <Switch>
          <Route exact path="/">
            <MainPageText />
          </Route>

          <Route path="/login">
            <Authentication
              handleName={this.handleName}
              handlePassword={this.handlePassword}
              createUser={(userId) => this.createUser(userId)}
            />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/createPost">
            <CreatePost
              handleTitle={this.handleTitle}
              handleContent={this.handleContent}
              createPost={(userId) => this.createPost(userId)}
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
