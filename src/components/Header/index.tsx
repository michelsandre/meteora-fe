import logo from '@/assets/logo-desktop.png';
import styles from './styles.module.css';

export const Header = () => {
  const menu = [
    { label: 'Home', link: '#' },
    { label: 'Nossas lojas', link: '#' },
    { label: 'Novidades', link: '#' },
    { label: 'Promoções', link: '#' },
  ];

  const handleSubmit = (formData: FormData) => {
    const produto = formData.get('produto');
    console.log(produto);
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href="">
              <img src={logo} alt="logo" width={133} height={32} />
            </a>
          </li>
          {menu.map((item, i) => (
            <li key={i}>
              <a href="">{item.label}</a>
            </li>
          ))}
        </ul>

        <form action={handleSubmit}>
          <input type="text" name="produto" placeholder="Digite o produto" />
          <button type="submit">Buscar</button>
        </form>
      </nav>
    </header>
  );
};
