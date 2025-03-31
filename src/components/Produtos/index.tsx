import { RefObject, useContext, useEffect, useRef, useState } from 'react';

import { ProdutoCard } from './ProdutoCard';
import styles from './styles.module.css';
import { ProdutoModal } from '../ProdutoModal';
import { IProduto } from '@/types/produto.interface';
import { ProdutoContext } from '@/context/ProdutoContext';

export const Produtos = () => {
  const ref: RefObject<HTMLDialogElement | null> = useRef(null);
  const [produtos, setProdutos] = useState<IProduto[] | null>(null);
  const context = useContext(ProdutoContext);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch('http://localhost:3000/produtos');
      if (!res.ok)
        throw new Error(
          `Erro ao conectar o banco de dados: ${res.status}. Certifique-se que o servidor está online.`
        );

      const data = await res.json();

      setProdutos(data);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  }

  const filterProduct = () => {
    if (context) {
      const normalize = (str: string) =>
        str
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/ç/g, 'c');

      const filter = produtos?.filter(
        (produto) =>
          normalize(produto.nome.toLowerCase()).includes(
            normalize(context.searchParam.toLowerCase())
          ) && produto.categoria.includes(context.groupParam)
      );
      return filter?.map((produto, index) => (
        <ProdutoCard produto={produto} key={index} ref={ref} />
      ));
    }
  };

  return (
    <>
      <section className={styles.section}>
        <h2>Produtos que estão bombando!</h2>
        <div className={styles.container}>{filterProduct()}</div>
      </section>
      <ProdutoModal ref={ref} />
    </>
  );
};
