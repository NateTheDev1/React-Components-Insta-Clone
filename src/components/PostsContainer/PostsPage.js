//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";
// import data

const PostsPage = (props) => {
  // set up state for your data

  const [data, setData] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {console.log(data)}
      {data.map((post) => (
        <Post post={post} key={post.likes} />
      ))}
    </div>
  );
};

export default PostsPage;
