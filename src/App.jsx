import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import User from "./components/User/User";
import Post from "./components/Post/Post";
import Comments from "./components/Comments/Comments";
import Todo from "./components/Todo/Todo";
import "./App.css";
import Posts from "./components/Post/Posts";

function App() {
  return (
    <div>
      <Navbar />
     

      <Routes>
        <Route path="/" element={<User />} />
         <Route path="/posts" element={<Post />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/todos" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
