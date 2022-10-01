import { CheckCircle, Trash, Circle } from "phosphor-react";
import { useState } from "react";
import { TodoType } from "../../types";
import styles from "./Todo.module.css";

type TodoProps = {
  id: number;
  isDone: boolean;
  todo: string;
  onCompleteTodo?: (id: number) => void;
};

export function Todo({
  id,
  isDone,
  todo,
  onCompleteTodo = () => {},
}: TodoProps) {
  const [isCompleted, setIsCompleted] = useState(isDone);

  return (
    <>
      <li className={styles.listItem} key={id}>
        <div
          className={styles.iconWrapperCenter}
          onClick={() => {
            setIsCompleted(!isCompleted);
            onCompleteTodo(id);
          }}
        >
          {isCompleted ? (
            <CheckCircle className={styles.iconCircle} size={25} />
          ) : (
            <Circle className={styles.iconCircle} size={25} />
          )}
        </div>
        <p className={isCompleted ? styles.doneTask : ""}> {todo} </p>
        <div className={styles.iconWrapperCenter}>
          <Trash className={styles.iconTrash} size={25} />
        </div>
      </li>
    </>
  );
}
