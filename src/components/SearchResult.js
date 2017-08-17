/* eslint-disable react/no-danger */

import { navigateTo } from 'gatsby-link';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { sanitizePath } from '../utils/files';

/**
 * Wrapper component.
 * @type {JSX}
 */
const Wrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, .4);
  margin: 20px 0;
  user-select: none;
  width: 100%;

  .search-result {
    background-color: #ffff02;
  }

  &:hover {
    border-color: #3bc480;
    cursor: pointer;

    & > div:nth-child(1) {
      color: #3bc480;
    }

    & > div:nth-child(1) {
      border-bottom-color: #3bc480;
    }
  }
`;

/**
 * Title component.
 * @type {JSX}
 */
const Title = styled.div`
  background-color: #fbfafa;
  border-bottom: 1px solid rgba(0, 0, 0, .4);
  font-size: 1.4rem;
  font-weight: bold;
  padding: 10px;
`;

/**
 * Preview component.
 * @type {JSX}
 */
const Preview = styled.div`
  font-size: .9rem;
  margin: 0 10px;

  code {
    font-size: .8rem;
  }
`;

/**
 * SearchResult Component.
 */
export default class SearchResult extends Component {
  /**
   * React Props.
   * @type {Object}
   */
  static propTypes = {
    result: PropTypes.shape({
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      relativePath: PropTypes.string.isRequired,
    }).isRequired,
  };

  /**
   * Triggered when a result is clicked.
   * @param  {SyntheticEvent} event - The associated event.
   */
  onClickResult = event => {
    event.preventDefault();

    navigateTo(sanitizePath(this.props.result.relativePath));
  };

  /**
   * Renders the component.
   * @return {JSX} The component.
   */
  render() {
    const { result } = this.props;

    return (
      <Wrapper onClick={this.onClickResult}>
        <Title>
          {result.title}
        </Title>
        <Preview dangerouslySetInnerHTML={{ __html: result.html }} />
      </Wrapper>
    );
  }
}
