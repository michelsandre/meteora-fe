import { RefObject } from 'react';
import { produtos } from '../../constants/produtos';
import { ProdutoCard } from './ProdutoCard';

export const Produtos = ({ ref }: { ref: RefObject<HTMLDialogElement> }) => {
  return (
    <section className="section-produtos">
      <h2>Produtos que estão bombando!</h2>
      <div className="produtos-container">
        {produtos.map((produto, index) => (
          <ProdutoCard produto={produto} key={index} ref={ref as RefObject<HTMLDialogElement>} />
        ))}
      </div>
    </section>
  );
};
