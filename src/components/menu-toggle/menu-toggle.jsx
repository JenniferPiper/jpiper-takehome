import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu.jsx';

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
    if (this.state.menuOpen) {
      this.setState({ 
        menuOpen: false,
        menuToggleClassName: 'jpt-menu-toggle closed',
      });
    } else {
      this.setState({ 
        menuOpen: true,
        menuToggleClassName: 'jpt-menu-toggle open',
      });
    }
  }

  render() { 
    return (
      <Fragment>
      <button 
      className={this.state.menuToggleClassName}
      onClick={this.handleClick}>
      <span className="icon-bar top-bar"></span>
      <span className="icon-bar middle-bar"></span>
      <span className="icon-bar bottom-bar"></span>
      </button>
      <Menu 
      menuOpen={this.state.menuOpen}
      />
      </Fragment>
    );
  }
}


MenuToggle.propTypes = {
  menuOpen: PropTypes.bool,
};

export default MenuToggle;
