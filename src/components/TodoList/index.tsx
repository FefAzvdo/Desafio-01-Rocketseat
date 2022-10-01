import { TodoType } from "../../types";
import { Todo } from "../Todo";
import styles from "./TodoList.module.css";

type TodoListProps = {
  todoList: TodoType[];
};

export function TodoList({ todoList }: TodoListProps) {
  return (
    <section className={styles.wrapper}>
      <div>
        <div className={styles.createdTasks}>
          <p>Tarefas criadas</p>
          <span className={styles.counterSpan}> 0 </span>
        </div>
        <div className={styles.concludedTasks}>
          <p>Concluídas</p>
          <span className={styles.counterSpan}> 12 de 20 </span>
        </div>
      </div>
      <ul>
        {todoList.map((todo: any) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isDone={todo.isDone}
            todo={todo.todo}
          />
        ))}
      </ul>
    </section>
  );
}
