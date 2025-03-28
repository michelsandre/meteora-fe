import { RefObject } from 'react';
import styles from './styles.module.css';

interface PropsType {
  ref: RefObject<HTMLDialogElement | null>;
  title: string;
  message: string;
}

export const ModalAlert = ({ ref, title, message }: PropsType) => {
  return (
    <dialog className={styles.modal} ref={ref}>
      <article>
        <header>
          <img src="/icones/check.svg" width="32" height="32" alt="Icone Check" />
          <h2>{title}</h2>
          <button type="button" className={styles.buttonClose} onClick={() => ref.current?.close()}>
            <img src="/icones/close.svg" width="16" height="16" alt="Icone Fechar" />
          </button>
        </header>
        <section>
          <p>{message}</p>
        </section>
      </article>
    </dialog>
  );
};
