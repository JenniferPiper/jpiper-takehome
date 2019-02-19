import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuPanel from '../menu-panel/menu-panel.jsx';

class MenuItem extends Component {
  render() {
    console.log('this.props.imgurl', this.props.imgurl);
    let panelJSX = '';
    if (this.props.submenu) {
      panelJSX = <MenuPanel 
      id={this.props.id}
      handlePanelClick={this.props.handlePanelClick}
      isActive={this.props.isActive}
      submenu={this.props.submenu}
      />; 
    } 
    return (
      <li 
      className='jpt-menu-item'
      id={`menu-item-${this.props.id}`}>
      <img src={this.props.imgurl} alt={this.props.text} />
    <a href={this.props.url}>{this.props.text}</a>
    {panelJSX}
    </li>
    );
  }
}


MenuItem.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.string,
  handlePanelClick: PropTypes.func,
  isActive: PropTypes.bool,
  submenu: PropTypes.array,
  imgurl: PropTypes.string,
};

export default MenuItem;
