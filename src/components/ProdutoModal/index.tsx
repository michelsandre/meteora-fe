import { RefObject, useContext } from 'react';
import styles from './styles.module.css';
import { Button } from '../Button';

import { ProdutoContext } from '@/context/ProdutoContext';

interface IModalProps {
  ref: RefObject<HTMLDialogElement>;
}

export const ProdutoModal = ({ ref }: IModalProps) => {
  const context = useContext(ProdutoContext);

  return (
    <dialog className={styles.modal} ref={ref}>
      <article>
        <header>
          <img src="/icones/check.svg" width="32" height="32" alt="Icone Check" />
          <h2>Confira detalhes sobre o produto</h2>
          <button type="button" className={styles.buttonClose} onClick={() => ref.current.close()}>
            <img src="/icones/close.svg" width="16" height="16" alt="Icone Fechar" />
          </button>
        </header>
        <section>
          <div className={styles.image}>
            <img src={context?.selectProduto?.imagem} width="350" height="422" alt="Jaqueta" />
          </div>
          <div className={styles.content}>
            <div className={styles.description}>
              <h3>{context?.selectProduto?.nome}</h3>
              <p>{context?.selectProduto?.descricao}</p>
              <hr />
              <p className={styles.price}>{context?.selectProduto?.preco}</p>
              <p className={styles.soldby}>Vendido e entregue por Riachuelo</p>
            </div>
            <div className={styles.options}>
              <p>Cores:</p>
              <fieldset defaultValue="color-1">
                <div className={styles.optionGroup}>
                  <input type="radio" name="color" id="color-1" value="color-1" defaultChecked />
                  <label htmlFor="color-1">Azul claro</label>
                </div>
                <div className={styles.optionGroup}>
                  <input type="radio" name="color" id="color-2" value="color-2" />
                  <label htmlFor="color-2">Offwhite</label>
                </div>
                <div className={styles.optionGroup}>
                  <input type="radio" name="color" id="color-3" value="color-3" />
                  <label htmlFor="color-3">Preto</label>
                </div>
              </fieldset>
            </div>
            <div className={styles.options}>
              <p>Tamanhos:</p>
              <fieldset defaultValue="color-1">
                <div className={styles.optionGroup}>
                  <input type="radio" name="size" id="P" value="P" defaultChecked />
                  <label htmlFor="color-1">P</label>
                </div>
                <div className={styles.optionGroup}>
                  <input type="radio" name="size" id="PP" value="PP" />
                  <label htmlFor="color-1">PP</label>
                </div>
                <div className={styles.optionGroup}>
                  <input type="radio" name="size" id="M" value="M" />
                  <label htmlFor="color-1">M</label>
                </div>
                <div className={styles.optionGroup}>
                  <input type="radio" name="size" id="G" value="G" />
                  <label htmlFor="color-1">G</label>
                </div>
                <div className={styles.optionGroup}>
                  <input type="radio" name="size" id="GG" value="GG" />
                  <label htmlFor="color-1">GG</label>
                </div>
              </fieldset>
            </div>
            <div className={styles.buttonContainer}>
              <Button type="button">Adicionar à sacola</Button>
            </div>
          </div>
        </section>
      </article>
    </dialog>
  );
};
