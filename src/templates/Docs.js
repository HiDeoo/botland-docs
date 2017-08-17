/* eslint-disable react/no-danger */

import _ from 'lodash';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { getTree, sanitizePath } from '../utils/files';
import Sidebar from '../components/Sidebar';

/**
 * Wrapper component.
 * @type {JSX}
 */
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

/**
 * ContentWrapper component.
 * @type {JSX}
 */
const ContentWrapper = styled.div`
  flex: 1;
  font-size: 1rem;
  width: 100%;

  & > * {
    & > h1:first-child {
      margin-top: 5px;
    }
  }

  h1 {
    border-bottom: 1px solid rgba(0, 0, 0, .4);
    padding-bottom: 10px;
  }

  a {
    color: #3bc480;
  }

  p > em {
    background-color: #f5fcf9;
    border-left: 4px solid #3bc480;
    display: block;
    font-size: .9rem;
    font-style: normal;
    padding: 8px 10px;

    & > strong {
      color: #2da067;
      display: block;
    }
  }

  ul {
    padding-left: 20px;
  }
`;

/**
 * Docs Component.
 */
const Docs = ({ data: { doc: { relativePath, childMarkdownRemark: { html, frontmatter: { title } } }, docs } }) =>
  <Wrapper>
    <Helmet title={`Bot Land Docs - ${title}`} />
    <Sidebar elements={getTree(_.map(docs.edges, 'node'))} current={sanitizePath(relativePath)} />
    <ContentWrapper>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ContentWrapper>
  </Wrapper>;

/**
 * React Props.
 * @type {Object}
 */
Docs.propTypes = {
  data: PropTypes.shape({
    doc: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    docs: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

/**
 * Docs GraphQL query.
 */
export const pageQuery = graphql`
  query Docs($relativePath: String!, $categoryRegex: String!) {
    docs: allFile(filter: { relativePath: { regex: $categoryRegex } }) {
      edges {
        node {
          relativePath
          childMarkdownRemark {
            html
            frontmatter {
              title
              order
            }
          }
        }
      }
    }
    doc: file(relativePath: { eq: $relativePath }) {
      relativePath
      childMarkdownRemark {
        html
        frontmatter {
          title
        }
      }
    }
  }
`;

export default Docs;
