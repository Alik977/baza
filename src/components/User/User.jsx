import { useEffect, useState } from "react";
import "./User.css";
import picture from "..//..//assets/image/pngwing.com.png";
function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("User fetch error:", err));
  }, []);

  return (
    <section>
      
      <div class="animacionreal">
        <img src={picture} alt="" />
      </div>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id} className="post-card">
          <h3>{user.name}</h3>
          <p>📧 {user.email}</p>
          <p>🏙️ {user.address.city}</p>
        </div>
      ))}
    </section>
  );
}

export default User;
