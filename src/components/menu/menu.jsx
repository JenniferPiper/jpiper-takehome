import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../menu-item/menu-item.jsx';

class Menu extends Component {
  render() { 
    console.log('Menu this.props: ', this.props);
    let menuClass;
    if (this.props.menuOpen) {
      menuClass = 'jpt-menu open';
    } else {
      menuClass = 'jpt-menu closed';
    }
    return (
      <nav
        className = {menuClass}
        >
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      </nav>
    );
  }
}


Menu.propTypes = {
  menuOpen: PropTypes.bool,
};

export default Menu;
