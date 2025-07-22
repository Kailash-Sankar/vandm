
import React from 'react';
import Nav from './Nav';

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const onOpenMenu = (e) => {
    e.preventDefault();
    setShowMenu(true);
  }

  const onCloseMenu = () => {
    setShowMenu(false);
  }

  return (
    <header>
      <a id="header-menu-trigger" href="#0" onClick={onOpenMenu}>
        <span className="header-menu-icon"></span>
      </a>
      <div className="header-logo">
        <a href="/">VandM Consulting</a>
      </div>
      <Nav showMenu={showMenu} onClose={onCloseMenu} />
    </header>
  );
};

export default Header;
