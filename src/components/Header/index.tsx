import logo from '../../assets/logo-desktop.png';
export const Header = () => {
  const menu = [
    { label: 'Home', link: '#' },
    { label: 'Nossas lojas', link: '#' },
    { label: 'Novidades', link: '#' },
    { label: 'Promoções', link: '#' },
  ];

  return (
    <header>
      <div className="menu-container">
        <img src={logo} alt="logo" height="32" width="133" />
        <ul>
          {menu.map((item, i) => (
            <li key={i}>{item.label}</li>
          ))}
        </ul>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Digite o produto" />
        <button>Buscar</button>
      </div>
    </header>
  );
};
