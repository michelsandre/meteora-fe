import { RefObject, useContext } from 'react';
import styles from './styles.module.css';
import { Button } from '@/components/Button';
import { IProduto } from '@/types/produto.interface';
import { ProdutoContext } from '@/context/ProdutoContext';

interface PropsProduto {
  produto: IProduto;
  ref: RefObject<HTMLDialogElement | null>;
}

export const ProdutoCard = ({ produto, ref }: PropsProduto) => {
  const context = useContext(ProdutoContext);

  const handleClick = () => {
    ref.current?.showModal();
    context?.setSelectProduto(produto);
  };

  return (
    <div className={styles.card}>
      <img src={produto.imagem} alt={produto.nome} />
      <div className={styles.container}>
        <p className={styles.titulo}>{produto.nome}</p>
        <span className={styles.descricao}>{produto.descricao}</span>
        <p className={styles.preco}>{produto.preco}</p>
        <div>
          <Button type="button" onClick={handleClick}>
            Ver mais
          </Button>
        </div>
      </div>
    </div>
  );
};
