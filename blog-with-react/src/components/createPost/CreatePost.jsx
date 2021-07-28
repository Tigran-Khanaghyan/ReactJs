import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom"

let styles = {
  submit: {
    color: "white",
  },
};

class CreatePost extends React.Component {
  render() {
    return (
      <div>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="text"
          name="text"
          autoComplete="title"
          autoFocus
          onChange={this.props.handleTitle}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          required
          name="password"
          type="text"
          id="password"
          autoComplete="Type your post text..."
          onChange={this.props.handleContent}
        />
        <Link to={{pathname: "/posts"}}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={styles.submit}
            onClick={this.props.createPost}
          >
            Create Post
          </Button>
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(CreatePost);
