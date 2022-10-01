import { ClipboardText } from "phosphor-react";
import styles from "./EmptyList.module.css";

import clipboardLogo from "../../assets/clipboard.svg";

export function EmptyList() {
  return (
    <section className={styles.wrapper}>
      <img src={clipboardLogo} alt={"Icone caderno"} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </section>
  );
}
