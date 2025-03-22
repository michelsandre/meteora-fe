import { RefObject } from 'react';
import { produtos } from '../../constants/produtos';
import { ProdutoCard } from './ProdutoCard';
import styles from './styles.module.css';

export const Produtos = ({ ref }: { ref: RefObject<HTMLDialogElement> }) => {
  return (
    <section className={styles.section}>
      <h2>Produtos que estão bombando!</h2>
      <div className={styles.container}>
        {produtos.map((produto, index) => (
          <ProdutoCard
            produto={produto}
            key={index}
            ref={ref as RefObject<HTMLDialogElement>}
          />
        ))}
      </div>
    </section>
  );
};
