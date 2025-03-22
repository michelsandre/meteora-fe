import { RefObject } from 'react';
import styles from './styles.module.css';
import { Button } from '@/components/Button';

interface PropsProduto {
  produto: {
    nome: string;
    descricao: string;
    preco: string;
    imagem: string;
  };
  ref: RefObject<HTMLDialogElement>;
}

export const ProdutoCard = ({ produto, ref }: PropsProduto) => {
  return (
    <div className={styles.card}>
      <img src={produto.imagem} alt={produto.nome} />
      <div className={styles.container}>
        <p className={styles.titulo}>{produto.nome}</p>
        <span className={styles.descricao}>{produto.descricao}</span>
        <p className={styles.preco}>{produto.preco}</p>
        <div>
          <Button type="button" onClick={() => ref.current.showModal()}>
            Ver mais
          </Button>
        </div>
      </div>
    </div>
  );
};
