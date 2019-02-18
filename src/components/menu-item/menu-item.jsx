import React from 'react';
import PropTypes from 'prop-types';
import MenuPanel from '../menu-panel/menu-panel.jsx';

const MenuItem = () => (
  <div className='jpt-menu-item'>
    <p>MENU ITEM</p>
  <MenuPanel /></div>
);

MenuItem.propTypes = {
  text: PropTypes.string,
};

export default MenuItem;
