import React from "react";
import styled from "styled-components";
import PostItemComponent from "../post/PostItemComponent";

const PostListWrap = styled.div`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PostsListComponent() {
  return (
    <PostListWrap>
      <PostItemComponent />
      <PostItemComponent />
      <PostItemComponent />
    </PostListWrap>
  );
}

export default PostsListComponent;
