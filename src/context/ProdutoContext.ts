import { IProduto } from '@/types/produto.interface';
import { createContext } from 'react';

interface ProdutoContextType {
  setSelectProduto: (produto: IProduto) => void;
  selectProduto: IProduto | null;
}

export const ProdutoContext = createContext<ProdutoContextType | null>(null);
