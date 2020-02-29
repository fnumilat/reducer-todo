import React, { useReducer } from 'react';
import { initialState, todoReducer } from "./Reducers/Reducer";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import "./Components/Todo.css";



const App = () => {
  const [{tasks}, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (e, task) => {
    e.preventDefault();

    const newTodo= {
      task: task,
      id: Date.now(),
      completed: false
    };

    dispatch({type: "ADD_TODO", payload: newTodo});
  };

  const toggleTodo = todoId => {
    //console.log(todoId);
    dispatch({type: "COMPLETED_TODO", payload: todoId });

  }

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({type: "CLEAR_TODO"})
  };
  
  
    console.log("rendering...");
    return (
      <div className="Main-Box">
        <div className="Main-Box-Title">
          <h2>Reducer Todo App</h2>
          <div className="Form-Box">
          <TodoForm addTodo={addTodo} />
          </div>
          <div className="Todos-Box">
          <TodoList 
              todo={tasks}
              toggleTodo={toggleTodo}
              clearCompleted={clearCompleted}
          />
          </div>
        </div>
      </div>
    );
  
}

export default App;