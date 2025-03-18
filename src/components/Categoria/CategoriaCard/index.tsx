interface PropsCategoria {
  categoria: {
    nome: string;
    imagem: string;
  };
}

export const CategoriaCard = ({ categoria }: PropsCategoria) => {
  return (
    <a href="#">
      <div className="card-categoria">
        <img src={categoria.imagem} alt={categoria.nome} />
        <p>{categoria.nome}</p>
      </div>
    </a>
  );
};
