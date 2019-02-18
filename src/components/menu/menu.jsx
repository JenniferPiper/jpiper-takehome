import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../menu-item/menu-item.jsx';

class Menu extends Component {
  render() { 
    console.log('Menu this.props: ', this.props);
    let menuJSX;
    if (this.props.menuOpen) {
      menuJSX = <nav className='jpt-menu open'>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        </nav>;
    } else {
      menuJSX = <nav className='jpt-menu closed'>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        </nav>;
    }
    return (
      <Fragment>
      { menuJSX }
      </Fragment>
    );
  }
}


Menu.propTypes = {
  menuOpen: PropTypes.bool,
};

export default Menu;
