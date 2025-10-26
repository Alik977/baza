import { NavLink } from "react-router-dom";
import picture from "..//..//assets/image/pngwing.com.png";


function Navbar() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "28px",
  };

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
 
      
    <nav
      style={{
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        
      }}
      className="bodynav"
    >
      
      <ul className="link">
        {" "}
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
      </ul>
     
    </nav>
  );
}

export default Navbar;
