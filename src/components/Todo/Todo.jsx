import { useEffect, useState } from "react";
import picture from "..//..//assets/image/pngwing.com.png"
import "./Todo.css"
function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)))
      .catch((err) => console.error("Todos fetch error:", err));
  }, []);

  return (
    <div className="bodytodo">
    <section >
      <div class="animacionreal">
      <img
        src={picture}
        alt=""
      />
   
    </div>
      <h2>Todos</h2>
      <ul >
        {todos.map((todo) => (
          <li key={todo.id} >
            {todo.title} –{" "}
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Done" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </section>
    </div>
  );
}

export default Todo;
