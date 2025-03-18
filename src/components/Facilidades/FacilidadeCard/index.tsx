interface PropsFacilidade {
  item: {
    titulo: string;
    descricao: string;
    icone: string;
  };
}

export const FacilidadeCard = ({ item }: PropsFacilidade) => {
  return (
    <li>
      <img src={item.icone} alt={item.titulo} />
      <div>
        <p className="titulo-facilidade">{item.titulo}</p>
        <p className="descricao-facilidade">{item.descricao}</p>
      </div>
    </li>
  );
};
