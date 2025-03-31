import { FormEvent, RefObject, useRef } from 'react';
import { Button } from '../Button';
import { ModalAlert } from '../ModalAlert';
import styles from './styles.module.css';

export const Newsletter = () => {
  const ref: RefObject<HTMLDialogElement | null> = useRef(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = form['email'] as HTMLInputElement;

    console.log(`Email ${email.value} cadastrado com sucesso!`);
    ref.current?.showModal();
  };
  return (
    <>
      <section className={styles.section}>
        <div className={styles.box}>
          <h5>
            Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra?{' '}
            <strong>Cadastre-se!</strong>
          </h5>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu email"
              pattern="^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$"
              title="Formato de email inválido"
              required
            />
            <Button type="submit">Enviar</Button>
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
