import { RefObject, useRef, useState } from 'react';
import { Banner } from './components/Banner';
import { Categoria } from './components/Categoria';
import { Facilidades } from './components/Facilidades';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Newsletter } from './components/Newsletter';
import { Produtos } from './components/Produtos';
import { IProduto } from './types/produto.interface';
import { ProdutoContext } from './context/ProdutoContext';

export default function App() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectProduto, setSelectProduto] = useState<IProduto | null>(null);

  return (
    <>
      <Header />
      <Banner />
      <Categoria />
      <ProdutoContext.Provider value={{ setSelectProduto, selectProduto }}>
        <Produtos ref={dialogRef as RefObject<HTMLDialogElement>} />
      </ProdutoContext.Provider>
      <Facilidades />
      <Newsletter />
      <Footer />
    </>
  );
}
