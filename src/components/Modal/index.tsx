import { RefObject } from 'react';
import styles from './styles.module.css';

export const Modal = ({ ref }: { ref: RefObject<HTMLDialogElement> }) => {
  return (
    <dialog className={styles.modal} ref={ref}>
      <article>
        <header>
          <img src="/icones/check.svg" width="32" height="32" alt="Icone Check" />
          <h2>Confira detalhes sobre o produto</h2>
          <button type="button" onClick={() => ref.current.close()}>
            <img src="/icones/close.svg" width="16" height="16" alt="Icone Fechar" />
          </button>
        </header>
        <section>
          <div className={styles.image} />
          <div className={styles.content}>
            <h3>Jaqueta Jeans</h3>
            <p>Modelo unissex oversized com gola de camurça. Atemporal e autêntica!</p>
          </div>
        </section>
      </article>
    </dialog>
  );
};
