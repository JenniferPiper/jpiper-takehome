import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import MenuItem from '../menu-item/menu-item.jsx';

const menuData = [
  {
    text: 'Menu Item 0',
    url: '#',
    id: _.uniqueId(),
  },
  {
    text: 'Menu Item 1',
    url: '#',
    id: _.uniqueId(),
  },
  {
    text: 'Menu Item 2',
    url: '#',
    id: _.uniqueId(),
  },
];

class Menu extends Component {
  render() { 
    console.log('Menu this.props: ', this.props);
    let menuClass;
    if (this.props.menuOpen) {
      menuClass = 'jpt-menu open';
    } else {
      menuClass = 'jpt-menu closed';
    }
    const menuItemsJSX = menuData.map((item, index) => <MenuItem key={index} text={item.text} url={item.url} id={item.id} />); // eslint-disable-line
 
    return (
      <nav
        className = {menuClass}
        >
        {menuItemsJSX}
      </nav>
    );
  }
}


Menu.propTypes = {
  menuOpen: PropTypes.bool,
};

export default Menu;
