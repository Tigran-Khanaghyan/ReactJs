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
import findUser from "../../helpers/findUniqueUser";
import ImgMediaCard from "../posts/ImgMediaCard";
import SinglePost from "../SinglePost/SinglePost";

let userId = null;
let postId = 0;
export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      name: "",
      password: "",
      isEdited: true,
      isPostClicked: false,
      currentUser: null,
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
    let newUser = null;
    postId = 0;
    let { name, password } = this.state;
    let existingUser = findUser(name, password);
    if (!existingUser && name.trim() && password.trim()) {
      newUser = setLocalStorageItems(userId, name, password);
      this.setState({
        currentUser: newUser,
        isLoggedIn: true,
      });
    }
    if (existingUser && name.trim() && password.trim()) {
      userId = findUser(name, password)[1];
      this.setState({
        currentUser: existingUser[0],
        isLoggedIn: true,
      });
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
    const { title, content} = this.state;
    
    let userInfo = localStorage.getItem(userId);
    let user = JSON.parse(userInfo);
    if (title.trim() && content.trim()) {
      let post = { title, content, postId };
      user.posts.push(post);
      this.setState({ currentUser: user });
      addPosts(userId, user);
    }
    return;
  };

  handlePostEdit = (event) => {
    this.setState({ isEdited: false });
  };

  handleLearnMore = (event) => {
    console.log(event.target);
  };

  render() {
    let { isLoggedIn, currentUser, isEdited } = this.state;

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
            <Posts
              currentUser={currentUser}
              isEdited={isEdited}
              handleContent={this.handleContent}
              handleTitle={this.handleTitle}
              handleLearnMore={this.handleLearnMore}
              postId={postId}
            />
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
