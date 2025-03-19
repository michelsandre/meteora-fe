import { Banner } from './components/Banner';
import { Categoria } from './components/Categoria';
import { Facilidades } from './components/Facilidades';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Newsletter } from './components/Newsletter';
import { Produtos } from './components/Produtos';

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <Categoria />
      <Produtos />
      <Facilidades />
      <Newsletter />
      <Footer />
    </>
  );
}
