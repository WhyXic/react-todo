import React from "react";

export default function Todocard(props) {
  const { children, deleteTodo, index, handleEditTodos } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditTodos(index);
          }}
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => deleteTodo(index)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
