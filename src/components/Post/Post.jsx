import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import picture from "../../assets/image/pngwing.com.png";
import "./Post.css";

function Post() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 5)))
      .catch((err) => console.error("Posts fetch error:", err));
  }, []);

  const handleClick = (id) => {
    navigate(`/posts/${id}`); 
  };

  return (
    <div className="bodypost">
      <div className="animacionreal">
        <img src={picture} alt="" />
      </div>

      <section>
        <h2>Posts</h2>
        {posts.map((post) => (
          <div
            key={post.id}
            className="post-card"
            onClick={() => handleClick(post.id)}
          >
            <h3>{post?.title}</h3>
            <p>{post?.body.slice(0, 60)}...</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Post;
