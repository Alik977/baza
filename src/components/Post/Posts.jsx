import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Post.css";

function Posts() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Post detail fetch error:", err));
  }, [id]);

 

  return (
    <div className="bodypost">
      <button className="backBtn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="post-detail">
        <h2>{post?.title}</h2>
        <p>{post?.body}</p>
      </div>
    </div>
  );
}

export default Posts;