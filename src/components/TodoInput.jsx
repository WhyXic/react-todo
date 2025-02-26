/**
 * A functional component that renders a form to add a todo.
 *
 * The component requires the following props:
 *   - handleAddTodos: A function that takes a todo string and adds it to the app state.
 *   - todoValue: The current value of the todo input field.
 *   - setTodoValue: A function that sets the todoValue state.
 *
 * The component renders an input field for the user to enter a todo, and a button to add the todo.
 * When the button is clicked, the handleAddTodos function is called with the current todoValue, and
 * the todoValue is reset to an empty string.
 */
export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        {" "}
        Add
      </button>
    </header>
  );
}
