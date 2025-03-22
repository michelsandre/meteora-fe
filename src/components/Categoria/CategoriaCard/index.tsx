import styles from './styles.module.css';

interface PropsCategoria {
  categoria: {
    nome: string;
    imagem: string;
  };
}

export const CategoriaCard = ({ categoria }: PropsCategoria) => {
  return (
    <a href="#">
      <div className={styles.categoria}>
        <img
          src={categoria.imagem}
          width="160"
          height="157"
          alt={categoria.nome}
        />
        <p>
          <strong>{categoria.nome}</strong>
        </p>
      </div>
    </a>
  );
};
