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
      return <MenuItem 
      key={item.id} 
      text={item.text} 
      url={item.url} 
      id={item.id} 
      isActive={isActive} 
      handlePanelClick={this.handlePanelClick}
      />;
    });
    return (
      <nav
        className={menuClass}
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
