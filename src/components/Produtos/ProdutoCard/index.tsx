import { RefObject } from 'react';

interface PropsProduto {
  produto: {
    nome: string;
    descricao: string;
    preco: string;
    imagem: string;
  };
  ref: RefObject<HTMLDialogElement>;
}

export const ProdutoCard = ({ produto, ref }: PropsProduto) => {
  return (
    <div className="card-produto">
      <img src={produto.imagem} alt="Tenis" />
      <p className="titulo">{produto.nome}</p>
      <p className="descricao">{produto.descricao}</p>
      <p className="preco">{produto.preco}</p>
      <button type="button" onClick={() => ref.current.showModal()}>
        Ver mais
      </button>
    </div>
  );
};
