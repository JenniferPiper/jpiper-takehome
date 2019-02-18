import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuPanel from '../menu-panel/menu-panel.jsx';

class MenuItem extends Component {
  render() {
    return (
  <div className='jpt-menu-item'>
    <a href={this.props.url}>{this.props.text} Id: {this.props.id}</a>
  <MenuPanel /></div>
    );
  }
}


MenuItem.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.string,
};

export default MenuItem;
