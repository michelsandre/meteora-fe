import { RefObject } from 'react';
import { produtos } from '../../constants/produtos';
import { ProdutoCard } from './ProdutoCard';
import styles from './styles.module.css';
import { ProdutoModal } from '../ProdutoModal';

interface IProdutos {
  ref: RefObject<HTMLDialogElement>;
}

export const Produtos = ({ ref }: IProdutos) => {
  return (
    <>
      <section className={styles.section}>
        <h2>Produtos que estão bombando!</h2>
        <div className={styles.container}>
          {produtos.map((produto, index) => (
            <ProdutoCard produto={produto} key={index} ref={ref as RefObject<HTMLDialogElement>} />
          ))}
        </div>
      </section>
      <ProdutoModal ref={ref} />
    </>
  );
};
