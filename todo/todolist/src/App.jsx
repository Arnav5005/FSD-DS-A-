import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // add todo

  function addTodo(){
    if (todo.trim() === "") {
      return;
    }

    const newTodo={
      id: Date.now(),
      text: todo,
      completed: false
    };

    setTodos([...todos,newTodo])
    setTodo("") // set todo to empty string
  }

  // delete todo

  function deleteTodo(id){
    setTodos( // we can apply filter such that we get all of the todos except the todo with target id
      todos.filter((todo)=>todo.id!=id)
    );
  }

  // 

  function toggleTodo(id){
    setTodos(
      todos.map((todo) => todo.id===id ? {...todo, completed: !todo.completed} : todo) // ...todo will copy all properties of this particular todo then we chaneg the completed field to opposite of what was old value if it was true then it'll become false and vice versa
    )
  }

  return (
    <>
      <div className="container">

        <h1>Todo List</h1>

        <div className="input-container">

          <input
            type="text"
            placeholder="Enter a task..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          <button onClick={addTodo}>
            Add
          </button>

        </div>

        <div className="todo-list">

          {todos.map((todo) => (

            <div className="todo" key={todo.id}>

              <span
                onClick={() => toggleTodo(todo.id)}
                className={todo.completed ? "completed" : ""}
              >
                {todo.text}
              </span>

              <button onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>

            </div>

          ))}

        </div>

      </div>
    </>
  )
}

export default App
