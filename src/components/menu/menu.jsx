import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItem from '../menu-item/menu-item.jsx';
import menuData from '../../menu-data';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemId: null,
    };
    this.handlePanelClick = this.handlePanelClick.bind(this);
  }

  handlePanelClick(event, isActive) {
    event.preventDefault();
    if (isActive) {
      this.setState({ activeItemId: null });
    } else {
      this.setState({ activeItemId: event.target.id });
    }
  }

  render() {
    let menuClass;
    if (this.props.menuOpen) {
      menuClass = 'jpt-menu open';
    } else {
      menuClass = 'jpt-menu closed';
    }
    const menuItemsJSX = menuData.map((item) => {
      const isActive = this.state.activeItemId === item.id;
      if (item.submenu) {
        return <MenuItem
          key={item.id}
          text={item.text}
          url={item.url}
          id={item.id}
          isActive={isActive}
          handlePanelClick={this.handlePanelClick}
          submenu={item.submenu}
        />;
      }
      return <MenuItem
        key={item.id}
        text={item.text}
        url={item.url}
        id={item.id}
      />;
    });
    return (
      <nav className={menuClass}>
        <ul>
          {menuItemsJSX}
        </ul>
      </nav>
    );
  }
}


Menu.propTypes = {
  menuOpen: PropTypes.bool,
};

export default Menu;
