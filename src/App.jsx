import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import Header from './components/header/header.jsx';
// import Menu from './components/menu/menu.jsx';
import './styles/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <Fragment>
    <Header title="J. Piper" />
    </Fragment>
    );
  }
}

export default hot(module)(App);
