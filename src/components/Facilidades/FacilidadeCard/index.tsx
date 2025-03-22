import styles from './styles.module.css';

interface PropsFacilidade {
  item: {
    titulo: string;
    descricao: string;
    icone: string;
  };
}

export const FacilidadeCard = ({ item }: PropsFacilidade) => {
  return (
    <li className={styles.card}>
      <img src={item.icone} alt={item.titulo} />
      <div>
        <p className={styles.titulo}>{item.titulo}</p>
        <p className={styles.descricao}>{item.descricao}</p>
      </div>
    </li>
  );
};
