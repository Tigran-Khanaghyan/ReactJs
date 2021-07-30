import React from "react";
import DefaultText from "./DefaultText";
import ImgMediaCard from "./ImgMediaCard";
import { Route } from "react-router-dom";

export function Posts(props) {
  
  let {
    currentUser,
    isEdited,
    handleContent,
    handleTitle,
    handleLearnMore,
    postId,
  } = props;
  let posts = null;
  if (currentUser) {
    posts = currentUser.posts;
  } else {
    return <DefaultText />;
  }

  return (
    <>
      {posts.map((post) => {
        postId = postId + 1;
        return (
          <>
            <ImgMediaCard
              key={post.title + post.content}
              title={post.title}
              postContent={post.content}
              isEdited={isEdited}
              handleContent={handleContent}
              handleTitle={handleTitle}
              handleLearnMore={handleLearnMore}
              postId={postId}
              posts={posts}
            />
          </>
        );
      })}
    </>
  );
}
