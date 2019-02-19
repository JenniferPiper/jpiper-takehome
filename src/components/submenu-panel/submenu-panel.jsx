import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class SubmenuPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submenuPanelOpen: false,
      submenuPanelClass: 'closed',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.submenuIsActive !== this.props.submenuIsActive) {
      if (this.props.submenuIsActive) {
        this.setState({
          submenuPanelOpen: true,
          submenuPanelClass: 'open',
        });
      } else {
        this.setState({
          submenuPanelOpen: false,
          submenuPanelClass: 'closed',
        });
      }
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.props.handlePanelClick(event, this.props.submenuIsActive);
  }

  render() {
    const subSubmenuItemsJSX = this.props.submenu.map((item, index) => {
      return <li 
      key={index}
      id={`menu-item-${item.id}`}
      >
        {item.text} Id: {item.id}
      </li>;
    });

    return (
      <Fragment>
        <ul
        className={`jpt-submenu-panel ${this.state.submenuPanelClass}`}>
        {subSubmenuItemsJSX}
        </ul>
  
      </Fragment>
    );
  }
}

SubmenuPanel.propTypes = {
  handlePanelClick: PropTypes.func,
  submenuIsActive: PropTypes.bool,
  submenu: PropTypes.array,
};

export default SubmenuPanel;
