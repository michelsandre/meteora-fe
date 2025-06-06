import { IProduto } from '@/types/produto.interface';
import { createContext } from 'react';

interface ProdutoContextType {
  setSelectProduto: (produto: IProduto) => void;
  selectProduto: IProduto | null;

  searchParam: string;
  groupParam: string;
}

export const ProdutoContext = createContext<ProdutoContextType | null>(null);
