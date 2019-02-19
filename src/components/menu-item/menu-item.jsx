import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuPanel from '../menu-panel/menu-panel.jsx';

class MenuItem extends Component {
  render() {
    return (
  <div className='jpt-menu-item'>
    <a href={this.props.url}>{this.props.text} Id: {this.props.id}</a>
  <MenuPanel 
    id={this.props.id}
    handlePanelClick={this.props.handlePanelClick}
    isActive={this.props.isActive}
    /></div>
    );
  }
}


MenuItem.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.string,
  handlePanelClick: PropTypes.func,
  isActive: PropTypes.bool,
};

export default MenuItem;
