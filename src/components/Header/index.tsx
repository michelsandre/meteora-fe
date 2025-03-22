import logo from '@/assets/logo-desktop.png';
import styles from './styles.module.css';
import closeIcon from '@/assets/marca-cruzada.png';
import menuIcon from '@/assets/hamburguer-icon.svg';
import { useRef } from 'react';

export const Header = () => {
  const menuRef = useRef<HTMLUListElement>(null);

  const menu = [
    { label: 'Home', link: '#' },
    { label: 'Nossas lojas', link: '#' },
    { label: 'Novidades', link: '#' },
    { label: 'Promoções', link: '#' },
  ];

  // const handleSubmit = (formData: FormData) => {
  //   const produto = formData.get('produto');
  //   console.log(produto);
  // };

  const handleOpenMenu = () => {
    menuRef.current?.classList.add(styles.show);
  };
  const handleCloseMenu = () => {
    menuRef.current?.classList.remove(styles.show);
  };

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <img src={logo} alt="logo" width={133} height={32} />
          <button
            type="button"
            className={styles.menu}
            onClick={handleOpenMenu}
          >
            <img src={menuIcon} width="18" height="18" alt="Menu" />
          </button>
        </div>

        <ul ref={menuRef}>
          <button
            type="button"
            className={styles.close}
            onClick={handleCloseMenu}
          >
            <img src={closeIcon} width="18" height="17" alt="Fechar" />
          </button>
          {menu.map((item, i) => (
            <li key={i}>
              <a href="">{item.label}</a>
            </li>
          ))}
        </ul>

        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="produto" placeholder="Digite o produto" />
          <button type="submit">Buscar</button>
        </form>
      </nav>
    </header>
  );
};
