import { categorias } from '@/constants/categorias';
import { CategoriaCard } from './CategoriaCard';
import styles from './styles.module.css';

export const Categoria = () => {
  return (
    <section className={styles.section}>
      <h2>Busque por categoria:</h2>
      <div className={styles.container}>
        {categorias.map((categoria, index) => (
          <CategoriaCard categoria={categoria} key={index} />
        ))}
      </div>
    </section>
  );
};
