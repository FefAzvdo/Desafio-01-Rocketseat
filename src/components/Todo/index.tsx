import { CheckCircle, Trash, Circle } from "phosphor-react";
import { TodoType } from "../../types";
import styles from "./Todo.module.css";

export function Todo({ id, isDone, todo }: TodoType) {
  return (
    <>
      <li className={styles.listItem} key={id}>
        <div className={styles.iconWrapperCenter}>
          {isDone ? (
            <CheckCircle className={styles.iconCircle} size={25} />
          ) : (
            <Circle className={styles.iconCircle} size={25} />
          )}
        </div>
        <p> {todo} </p>
        <div className={styles.iconWrapperCenter}>
          <Trash className={styles.iconTrash} size={25} />
        </div>
      </li>
    </>
  );
}
