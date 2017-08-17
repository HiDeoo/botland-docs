import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import 'prismjs/themes/prism.css';

import Header from '../components/Header';

import '../utils/styled';

/**
 * HeaderWrapper component.
 * @type {JSX}
 */
const HeaderWrapper = styled.div`background-color: #3bc480;`;

/**
 * ContentWrapper component.
 * @type {JSX}
 */
const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 30px 0;
`;

/**
 * Layout Component.
 */
const Layout = ({ children }) =>
  <div>
    <Helmet title={`Bot Land Docs`} />
    <HeaderWrapper>
      <Header />
    </HeaderWrapper>
    <ContentWrapper>
      {children()}
    </ContentWrapper>
  </div>;

/**
 * React Props.
 * @type {Object}
 */
Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
