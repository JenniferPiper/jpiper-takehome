import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../menu-item/menu-item.jsx';


class MenuPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      menuToggleClassName: 'jpt-menu-toggle closed',
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className='jpt-menu-panel level1'>MENU PANEL LEVEL 1
      </div>
    );
  }
}

MenuPanel.propTypes = {
  title: PropTypes.string,
};

export default MenuPanel;
