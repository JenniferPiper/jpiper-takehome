import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SubmenuPanel from '../submenu-panel/submenu-panel.jsx';

class MenuPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelOpen: false,
      panelClass: 'closed',
      activeItemId: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmenuClick = this.handleSubmenuClick.bind(this);
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

  handleSubmenuClick(event) {
    event.preventDefault();
    if (event.target.id === this.state.activeItemId) {
      this.setState({ activeItemId: null });
    } else {
      this.setState({ activeItemId: event.target.id });
    }
  }

  render() {
    let submenuItemsJSX = '';
    if (this.props.submenu) {
      submenuItemsJSX = this.props.submenu.map((item, index) => {
        const submenuIsActive = this.state.activeItemId === item.id;
        const submenuClass = submenuIsActive ? 'open' : 'closed';
        let submenuButtonJSX = '';
        if (item.submenu) {
          submenuButtonJSX = <Fragment><button
            className = {`jpt-submenu-button ${submenuClass}`}
            onClick={this.handleSubmenuClick}
            id={item.id}
            ></button>
            <SubmenuPanel
              id={item.id}
              handleSubmenuClick={this.handleSubmenuClick}
              submenuIsActive={submenuIsActive}
              submenu={item.submenu} />
          </Fragment>;
        }
        return <li
          key={index}
          id={`menu-item-${item.id}`}>
          <span>{item.text}</span>
          {submenuButtonJSX}
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
