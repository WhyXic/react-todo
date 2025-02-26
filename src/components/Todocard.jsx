import React from "react";

/**
 * A functional component that renders a list item of a todo.
 *
 * The component takes in the following props:
 *   - children: The content of the todo item
 *   - deleteTodo: A function that takes an index and deletes the associated todo
 *   - index: The index of the todo item
 *   - handleEditTodos: A function that takes an index and handles the editing of the associated todo
 *
 * The component renders a list item with the content of the todo item and two buttons, one for editing
 * the todo and one for deleting the todo.
 */
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
