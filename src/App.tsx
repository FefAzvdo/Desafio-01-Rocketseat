import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { useState } from "react";

import { TodoType } from "./types";

import styles from "./App.module.css";

const MOCK = [
  { id: 1, todo: "Arrumar o quarto", isDone: false },
  { id: 2, todo: "Estudar ReactJs", isDone: true },
];

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Form
          onCreateNewTodo={(todo) => {
            const newTodo = { id: 1, todo, isDone: false };
            setTodos([...todos, newTodo]);
          }}
        />
        <TodoList todoList={todos} />
      </div>
    </>
  );
}

export default App;
