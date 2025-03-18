import { facilidades } from '../../constants/facilidades';
import { FacilidadeCard } from './FacilidadeCard';

export const Facilidades = () => {
  return (
    <section className="section-facilidades">
      <h2>Conheça todas as nossas facilidades</h2>
      <ul>
        {facilidades.map((item, index) => (
          <FacilidadeCard item={item} key={index} />
        ))}
      </ul>
    </section>
  );
};
