import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Container = ({ children }) => <div className="container">{children}</div>;

export default Container;

Container.propTypes = {
  children: PropTypes.any.isRequired,
};
