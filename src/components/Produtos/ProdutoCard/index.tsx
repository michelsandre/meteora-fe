interface PropsProduto {
  produto: {
    nome: string;
    descricao: string;
    preco: string;
    imagem: string;
  };
}

export const ProdutoCard = ({ produto }: PropsProduto) => {
  return (
    <div className="card-produto">
      <img src={produto.imagem} alt="Tenis" />
      <p className="titulo">{produto.nome}</p>
      <p className="descricao">{produto.descricao}</p>
      <p className="preco">{produto.preco}</p>
      <button>Ver mais</button>
    </div>
  );
};
