import { useState } from 'react';
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
  const [selectProduto, setSelectProduto] = useState<IProduto | null>(null);
  const [searchParam, setSearchParam] = useState<string>('');
  const [groupParam, setGroupParam] = useState<string>('');

  return (
    <>
      <Header setSearchParam={setSearchParam} />
      <Banner />
      <Categoria setGroupParam={setGroupParam} groupParam={groupParam} />
      <ProdutoContext.Provider value={{ setSelectProduto, selectProduto, searchParam, groupParam }}>
        <Produtos />
      </ProdutoContext.Provider>
      <Facilidades />
      <Newsletter />
      <Footer />
    </>
  );
}
