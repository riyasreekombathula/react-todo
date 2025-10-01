import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => setTasks(res.data))
      .catch(err => console.log(err));
  }, []);

  const addTask = () => {
    if (title) {
      setTasks([...tasks, { id: tasks.length + 1, title }]);
      setTitle("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Todo App</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task title" />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(t => <li key={t.id}>{t.title}</li>)}
      </ul>
    </div>
  );
}

export default App;



