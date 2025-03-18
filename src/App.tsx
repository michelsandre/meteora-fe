import { Banner } from './components/Banner';
import { Categoria } from './components/Categoria';
import { Facilidades } from './components/Facilidades';
import { Header } from './components/Header';
import { Produtos } from './components/Produtos';

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <Categoria />
      <Produtos />
      <Facilidades />
    </>
  );
}
