import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      menuToggleClassName: 'jpt-menu-toggle closed',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    console.log('toggle clicked');
    if (this.state.menuOpen) {
      this.setState({ menuOpen: false });
    } else {
      this.setState({ menuOpen: true });
    }
  }

  render() { 
    return (
      <button 
      className={this.state.menuToggleClassName}
      onClick={this.handleClick}>
      <span className="icon-bar top-bar"></span>
      <span className="icon-bar middle-bar"></span>
      <span className="icon-bar bottom-bar"></span>
      </button>
    );
  }
}


MenuToggle.propTypes = {
  menuOpen: PropTypes.bool,
};

export default MenuToggle;
