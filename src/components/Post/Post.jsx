import { useEffect, useState } from "react";
import "./Post.css"
function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 5)))
      .catch((err) => console.error("Posts fetch error:", err));
  }, []);

  return (
    <div className="bodypost"><section >
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </section></div>
    
  );
}

export default Post;
