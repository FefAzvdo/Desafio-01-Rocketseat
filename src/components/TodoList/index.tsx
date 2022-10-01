import { TodoType } from "../../types";
import { Todo } from "../Todo";
import styles from "./TodoList.module.css";

type TodoListProps = {
  todoList: TodoType[];
  onCompleteTodo: (id: number) => void;
  onRemoveTodo: (id: number) => void;
};

export function TodoList({
  todoList,
  onCompleteTodo,
  onRemoveTodo,
}: TodoListProps) {
  const concludedTasks = todoList.filter((todo) => todo.isDone).length;

  return (
    <section className={styles.wrapper}>
      <div>
        <div className={styles.createdTasks}>
          <p>Tarefas criadas</p>
          <span className={styles.counterSpan}>{todoList.length}</span>
        </div>
        <div className={styles.concludedTasks}>
          <p>Concluídas</p>
          <span className={styles.counterSpan}>
            <>
              {concludedTasks} de {todoList.length}
            </>
          </span>
        </div>
      </div>
      <ul>
        {todoList.map((todo: any) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isDone={todo.isDone}
            todo={todo.todo}
            onCompleteTodo={onCompleteTodo}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </ul>
    </section>
  );
}
