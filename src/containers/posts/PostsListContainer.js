import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import PostsListComponent from "../../components/posts/PostsListComponent";

const baseURL = "http://localhost:3000";

function PostsListContainer() {
  const history = useHistory();

  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios({
          method: "GET",
          url: `${baseURL}/ssac/board`,
        });
        // console.log(response);
        if (response.status === 200) {
          const result = response.data.data;
          // console.log(result);
          setPostsList(result);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  const onClickPost = (postId) => {
    console.log(postId);
    history.push(`/post/${postId}`);
  };

  return <PostsListComponent onClickPost={onClickPost} postsList={postsList} />;
}

export default PostsListContainer;
