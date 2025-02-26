import React from "react";
import Todocard from "./Todocard";

/**
 * A functional component that renders a list of todos.
 *
 * The component takes an object with the following properties:
 *   - todos: An array of todos
 *
 * The component renders a <ul> element with the class "main".
 * Within the <ul> element, the component maps over the todos and renders a
 * Todocard component for each todo.
 *
 * @param {object} props - An object containing the properties for the component
 * @param {array} props.todos - An array of todos
 * @returns {JSX.Element} The rendered JSX element
 */
export default function Todolist(props) {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <Todocard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </Todocard>
        );
      })}
    </ul>
  );
}
