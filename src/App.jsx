import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/Todolist";

/**
 * This is the main function of the app. It renders the TodoInput and Todolist
 * components and handles the state of the app.
 *
 * The state of the app is stored in localStorage, so that the app can persist
 * data between reloads.
 *
 * @function App
 * @returns {JSX.Element} The rendered JSX element
 */
function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  /**
   * Persists the data to localStorage.
   *
   * @function persistData
   * @param {array} newList - The new list of todos
   */
  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }
  /**
   * Handles the addition of a new todo.
   *
   * @function handleAddTodos
   * @param {string} newTodo - The new todo
   */
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  /**
   * Handles the deletion of a todo.
   *
   * @function deleteTodo
   * @param {number} index - The index of the todo to delete
   */
  function deleteTodo(index) {
    const newTodoList = todos.filter((todos, todosIndex) => {
      return todosIndex !== index;
    });
    persistData(newTodoList);

    setTodos(newTodoList);
  }
  /**
   * Handles the editing of a todo.
   *
   * @function handleEditTodos
   * @param {number} index - The index of the todo to edit
   * @param {string} newTodo - The new todo
   */
  function handleEditTodos(index, newTodo) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    deleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);
  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <Todolist
        todos={todos}
        deleteTodo={deleteTodo}
        handleAddTodos={handleAddTodos}
        handleEditTodos={handleEditTodos}
      />
    </>
  );
}

export default App;
