import { TextField } from "@material-ui/core"

export default function SinglePost(props) {
    return (
        <>
        <TextField
              margin="normal"
              type="text"
              fullWidth
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
        </>
    )
}