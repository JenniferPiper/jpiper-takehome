import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
// import MenuItem from '../menu-item/menu-item.jsx';

class MenuPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelOpen: false,
      panelClass: 'closed',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.panelOpen) {
      this.setState({ 
        panelOpen: false,
        panelClass: 'closed',
      });
    } else {
      this.setState({ 
        panelOpen: true,
        panelClass: 'open',
      });
    }
  }

  render() {
    return (
      <Fragment>
      <button
      className={`jpt-panel-button ${this.state.panelClass}`}
      onClick={this.handleClick}>
      </button>
      <div className={`jpt-menu-panel ${this.state.panelClass}`}>MENU PANEL LEVEL 1
      </div>
      </Fragment>
    );
  }
}

MenuPanel.propTypes = {
  // panelOpen: PropTypes.bool,
};

export default MenuPanel;
