import { categorias } from '../../constants/categorias';
import { CategoriaCard } from './CategoriaCard';

export const Categoria = () => {
  return (
    <section className="section-categorias">
      <h2>Busque por categoria:</h2>
      <div className="categoria-container">
        {categorias.map((categoria) => (
          <CategoriaCard categoria={categoria} />
        ))}
      </div>
    </section>
  );
};
