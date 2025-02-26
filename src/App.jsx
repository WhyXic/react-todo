import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/Todolist";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  function deleteTodo(index) {
    const newTodoList = todos.filter((todos, todosIndex) => {
      return todosIndex !== index;
    });
    persistData(newTodoList);

    setTodos(newTodoList);
  }
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
