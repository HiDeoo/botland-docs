import NativeLink from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Link Component.
 */
const Link = ({ to, children, ...nativeProps }) =>
  to.match(/^https?:\/\//)
    ? <a href={to} target="_blank" {...nativeProps}>
        {children}
      </a>
    : <NativeLink to={to} {...nativeProps}>
        {children}
      </NativeLink>;

/**
 * React Props.
 * @type {Object}
 */
Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Link;
