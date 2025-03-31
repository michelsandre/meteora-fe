import styles from './styles.module.css';

interface PropsCategoria {
  categoria: {
    nome: string;
    imagem: string;
  };
  groupParam: string;
  setGroupParam: (callback: (prev: string) => string) => void;
}

export const CategoriaCard = ({ categoria, setGroupParam, groupParam }: PropsCategoria) => {
  const handleClick = () => {
    setGroupParam((prev) => (prev === categoria.nome ? '' : categoria.nome));
  };

  return (
    <div
      className={`${styles.categoria} ${categoria.nome === groupParam ? styles.active : ''}`}
      onClick={handleClick}
    >
      <img src={categoria.imagem} width="160" height="157" alt={categoria.nome} />
      <p>
        <strong>{categoria.nome}</strong>
      </p>
    </div>
  );
};
