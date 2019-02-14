import React from 'react';
import PropTypes from 'prop-types';
import './hello-world.css';

const HelloWorld = ({ title }) => (
  <div className='hello-world'>{title}</div>
);

HelloWorld.propTypes = {
  title: PropTypes.string,
};

export default HelloWorld;
