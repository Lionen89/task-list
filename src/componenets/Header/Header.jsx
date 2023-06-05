import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__info">
        <span className="header__logo"></span>
        <h2 className="header__title">Проект</h2>
      </div>
      <div className="header__user">
        <span className="header__bell"></span>
        <div className="header__user-container">
          <span className="header__user-avatar"></span>
          <div className="header__user-info">
            <p className="header__user-name">Иванов В. А.</p>
            <span className="header__user-job">Должность</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
