import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuItems = [
    { id: 1, title: 'Home' },
    { id: 2, title: 'About' },
    { id: 3, title: 'Services' },
    { id: 4, title: 'Contact' },
  ];

  return (
    <div className="menu">
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <a href="#" className="menu-link">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
