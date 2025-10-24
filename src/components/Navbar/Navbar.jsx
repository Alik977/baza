import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "18px",
  };

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <nav
      style={{
        background: "#1a237e",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      
      }}
      className="bodynav"
    >
      <NavLink to="/" style={linkStyle} activeStyle={activeStyle} end>
        Users
      </NavLink>
      <NavLink to="/posts" style={linkStyle} activeStyle={activeStyle}>
        Posts
      </NavLink>
      <NavLink to="/comments" style={linkStyle} activeStyle={activeStyle}>
        Comments
      </NavLink>
      <NavLink to="/todos" style={linkStyle} activeStyle={activeStyle}>
        Todos
      </NavLink>
    </nav>
  );
}

export default Navbar;
