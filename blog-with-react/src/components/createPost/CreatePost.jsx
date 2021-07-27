import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";


let styles = {
    submit : {
        color: "white"
    }
}

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
          label="Name"
          name="text"
          autoComplete="name"
          autoFocus
          onChange={this.props.handleTitle}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={this.props.handleContent}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={styles.submit}
          onClick={this.props.createPost}
        >
          Log in
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(CreatePost)