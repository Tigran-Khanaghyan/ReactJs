import React from "react";
import DefaultText from "./DefaultText";
import ImgMediaCard from "./ImgMediaCard";

export function Posts(props) {
  let { currentUser } = props;
  let posts = null
  if (currentUser) {
     posts = currentUser.posts;
  }else{
    return <DefaultText />
  }

  return (
    <>
      {posts.map((post) => {
        return <ImgMediaCard title={post.title} postContent={post.content} />;
      })}
    </>
  );
}
