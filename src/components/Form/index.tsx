import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import styles from "./Form.module.css";

interface FormProps {
  onCreateNewTodo: (todo: string) => void;
}

export function Form({ onCreateNewTodo }: FormProps) {
  const [newTodo, setNewTodo] = useState("");

  function handleClickSubmitNewTask() {
    onCreateNewTodo(newTodo);
  }

  function handleChangeNewTodoValue(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }

  return (
    <form onSubmit={handleClickSubmitNewTask} className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
        value={newTodo}
        onChange={(e) => handleChangeNewTodoValue(e)}
      />
      <button type="submit">
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  );
}
