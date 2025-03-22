import { facilidades } from '../../constants/facilidades';
import { FacilidadeCard } from './FacilidadeCard';
import styles from './styles.module.css';

export const Facilidades = () => {
  return (
    <section className={styles.section}>
      <h2>Conheça todas as nossas facilidades</h2>
      <ul>
        {facilidades.map((item, index) => (
          <FacilidadeCard item={item} key={index} />
        ))}
      </ul>
    </section>
  );
};
