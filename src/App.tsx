import { RefObject, useRef } from 'react';
import { Banner } from './components/Banner';
import { Categoria } from './components/Categoria';
import { Facilidades } from './components/Facilidades';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Modal } from './components/Modal';
import { Newsletter } from './components/Newsletter';
import { Produtos } from './components/Produtos';

export default function App() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Header />
      <Banner />
      <Categoria />
      <Produtos ref={dialogRef as RefObject<HTMLDialogElement>} />
      <Facilidades />
      <Newsletter />
      <Modal ref={dialogRef as RefObject<HTMLDialogElement>} />
      <Footer />
    </>
  );
}
