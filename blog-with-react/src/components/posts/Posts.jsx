import React from "react";
import DefaultText from "./DefaultText";
import ImgMediaCard from "./ImgMediaCard";

export function Posts(props) {
  let { currentUser, edit, isEdited, handleContent, handleTitle } = props;
  let posts = null;
  if (currentUser) {
    posts = currentUser.posts;
  } else {
    return <DefaultText />;
  }

  return (
    <>
      {posts.map((post) => {
        return (
          <ImgMediaCard
            key={post.title + post.content}
            title={post.title}
            postContent={post.content}
            edit={edit}
            isEdited={isEdited}
            handleContent={handleContent}
            handleTitle={handleTitle}
          />
        );
      })}
    </>
  );
}
