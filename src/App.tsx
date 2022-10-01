import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { useState } from "react";

import { TodoType } from "./types";

import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  function handleClickCreateNewTodo(todo: string) {
    const id = Math.random() + todos.length;
    const newTodo = { id, todo, isDone: false };
    setTodos((todo) => [...todo, newTodo]);
  }

  function handleClickCompleteTodo(id: number) {
    const edited = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return {
          ...todo,
          isDone: todo.isDone,
        };
      }
    });

    setTodos(edited);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Form onCreateNewTodo={(todo) => handleClickCreateNewTodo(todo)} />
        <TodoList
          todoList={todos}
          onCompleteTodo={(id) => handleClickCompleteTodo(id)}
        />
      </div>
    </>
  );
}

export default App;
