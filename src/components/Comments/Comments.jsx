import { useEffect, useState } from "react";
import "./Comments.css";
function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data.slice(0, 5)))
      .catch((err) => console.error("Comments fetch error:", err));
  }, []);

  return (
    <div className="bodycom">
      {" "}
      <section>
        <h2>Comments</h2>
        {comments.map((c) => (
          <div key={c.id} className="comment-card">
            <p>
              <strong>{c.email}</strong> said:
            </p>
            <p>{c.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Comments;
