import { categorias } from '@/constants/categorias';
import { CategoriaCard } from './CategoriaCard';
import styles from './styles.module.css';

interface PropsCategoriaType {
  groupParam: string;
  setGroupParam: (callback: (prev: string) => string) => void;
}

export const Categoria = ({ setGroupParam, groupParam }: PropsCategoriaType) => {
  return (
    <section className={styles.section}>
      <h2>Busque por categoria:</h2>
      <div className={styles.container}>
        {categorias.map((categoria, index) => (
          <CategoriaCard
            categoria={categoria}
            key={index}
            setGroupParam={setGroupParam}
            groupParam={groupParam}
          />
        ))}
      </div>
    </section>
  );
};
