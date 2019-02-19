import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
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

  componentDidUpdate(prevProps) {
    if (prevProps.isActive !== this.props.isActive) {
      if (this.props.isActive) {
        this.setState({
          panelOpen: true,
          panelClass: 'open',
        });
      } else {
        this.setState({
          panelOpen: false,
          panelClass: 'closed',
        });
      }
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.props.handlePanelClick(event, this.props.isActive);
  }


  render() {
    let submenuItemsJSX;
    if (this.props.submenu) {
      submenuItemsJSX = this.props.submenu.map((item, index) => {
        return <li key={index}>
        ITEM
        </li>;
      });
    }

    return (
      <Fragment>
        <button
          className={`jpt-panel-button ${this.state.panelClass}`}
          id={this.props.id}
          onClick={this.handleClick}>
        </button>
        <div className={`jpt-menu-panel ${this.state.panelClass}`}>
        <ul>
          {submenuItemsJSX}
        </ul>
      </div>
      </Fragment>
    );
  }
}

MenuPanel.propTypes = {
  id: PropTypes.string,
  handlePanelClick: PropTypes.func,
  isActive: PropTypes.bool,
  submenu: PropTypes.array,
};

export default MenuPanel;
