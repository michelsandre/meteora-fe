import { RefObject, useRef } from 'react';
import { Button } from '../Button';
import { ModalAlert } from '../ModalAlert';
import styles from './styles.module.css';

export const Newsletter = () => {
  const ref: RefObject<HTMLDialogElement | null> = useRef(null);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.box}>
          <h5>
            Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra?{' '}
            <strong>Cadastre-se!</strong>
          </h5>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" name="email" placeholder="Digite seu email" />
            <Button onClick={() => ref.current?.showModal()}>Enviar</Button>
          </form>
        </div>
      </section>
      <ModalAlert
        ref={ref}
        title="E-mail cadastrado com sucesso!"
        message="Em breve você receberá novidades exclusivas da Meteora."
      />
    </>
  );
};
