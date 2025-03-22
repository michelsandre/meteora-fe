import { Button } from '../Button';
import styles from './styles.module.css';

export const Newsletter = () => {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <h5>
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? <strong>Cadastre-se!</strong>
        </h5>
        <form action="">
          <input type="email" name="email" placeholder="Digite seu email" />
          <Button>Enviar</Button>
        </form>
      </div>
    </section>
  );
};
