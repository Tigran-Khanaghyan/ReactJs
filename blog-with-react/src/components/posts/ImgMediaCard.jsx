import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { Route, Link } from "react-router-dom";
import SinglePost from "../SinglePost/SinglePost";

export default function ImgMediaCard(props) {
  return (
    <>
      <Card>
        <CardActionArea>
          <CardContent>
            <TextField
              margin="normal"
              type="text"
              disabled={props.isEdited}
              value={props.title}
              onChange={props.handleTitle}
            />
            <TextField
              margin="normal"
              fullWidth
              type="text"
              disabled={props.isEdited}
              value={props.postContent}
              onChange={props.handleContent}
            />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={props.handleLearnMore}>
            <Link to={`/posts/${props.postId}`}>Learn More</Link>
            <Route
              path={"/posts/:postId"}
              render={({match}) => {
                // console.log(match)
                // <SinglePost/>
                // let post = props.posts.find((item) => item.postId === props.postId)
                console.log(props.posts)
              }}
            />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
