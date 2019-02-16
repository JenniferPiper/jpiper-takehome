import React from 'react';
import PropTypes from 'prop-types';
import MenuPanel from '../menu-panel/menu-panel.jsx';

const Menu = () => (
  <nav className='jpt-menu'>MENU GOES HERE
  <MenuPanel />
  <MenuPanel />
  <MenuPanel />
  </nav>
);

Menu.propTypes = {
  title: PropTypes.string,
};

export default Menu;
