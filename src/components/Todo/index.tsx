import { CheckCircle, Trash, Circle } from "phosphor-react";
import { useState } from "react";
import { TodoType } from "../../types";
import styles from "./Todo.module.css";

type TodoProps = {
  id: number;
  isDone: boolean;
  todo: string;
  onCompleteTodo?: (id: number) => void;
  onRemoveTodo?: (id: number) => void;
};

export function Todo({
  id,
  isDone,
  todo,
  onCompleteTodo = () => {},
  onRemoveTodo = () => {},
}: TodoProps) {
  return (
    <>
      <li className={styles.listItem} key={id}>
        <div
          className={styles.iconWrapperCenter}
          onClick={() => {
            onCompleteTodo(id);
          }}
        >
          {isDone ? (
            <CheckCircle className={styles.iconCircle} size={25} />
          ) : (
            <Circle className={styles.iconCircle} size={25} />
          )}
        </div>
        <p className={isDone ? styles.doneTask : ""}> {todo} </p>
        <div
          className={styles.iconWrapperCenter}
          onClick={() => {
            onRemoveTodo(id);
          }}
        >
          <Trash className={styles.iconTrash} size={25} />
        </div>
      </li>
    </>
  );
}
