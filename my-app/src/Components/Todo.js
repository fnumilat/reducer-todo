
import React from "react";

const Todo = props => {
    console.log(props);

    return(
        <div className="Todo-Item">
            <div
                className={`todo${props.todo.completed ? " completed" : ""}`}
                onClick={() => props.toggleTodo(props.todo.id)}
            >
                <p>{props.todo.task}</p>
            </div>
        </div>
    );
};

export default Todo;