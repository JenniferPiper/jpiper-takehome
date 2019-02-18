import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../menu-item/menu-item.jsx';

class MenuPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelOpen: false,
      openClosed: 'closed',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.panelOpen) {
      this.setState({ 
        panelOpen: false,
        openClosed: 'closed',
      });
    } else {
      this.setState({ 
        panelOpen: true,
        openClosed: 'open',
      });
    }
  }

  render() {
    return (
      <Fragment>
      <button
      className={`jpt-panel-button ${this.state.openClosed}`}
      onClick={this.handleClick}>
      </button>
      <div className={`jpt-menu-panel ${this.state.openClosed}`}>MENU PANEL LEVEL 1
      </div>
      </Fragment>
    );
  }
}

MenuPanel.propTypes = {
  // panelOpen: PropTypes.bool,
};

export default MenuPanel;
