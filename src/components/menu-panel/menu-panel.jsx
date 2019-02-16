import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../menu-item/menu-item.jsx';

const MenuPanel = () => (
  <div className='jpt-menu-panel'>MENU PANEL
  <MenuItem />
  <MenuItem />
  </div>
);

MenuPanel.propTypes = {
  title: PropTypes.string,
};

export default MenuPanel;
