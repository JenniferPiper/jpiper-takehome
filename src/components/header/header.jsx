import React from 'react';
import PropTypes from 'prop-types';
import MenuToggle from '../menu-toggle/menu-toggle.jsx';

const Header = ({ title }) => (
  <header className='jpt-header'>
  <h1>{title}</h1>
  <MenuToggle />
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
