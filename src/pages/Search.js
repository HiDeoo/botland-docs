import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import SearchResult from '../components/SearchResult';

/**
 * Input component.
 * @type {JSX}
 */
const Input = styled.input.attrs({
  autoFocus: true,
  placeholder: 'Search the documentation',
  spellCheck: false,
  type: 'text',
})`
  border: 1px solid rgba(0, 0, 0, .4);
  padding: 6px 10px;
  width: calc(100% - 20px);

  &:focus {
    border-color: #3bc480;
  }
`;

/**
 * Search Component.
 */
export default class Search extends Component {
  /**
   * React Props.
   * @type {Object}
   */
  static propTypes = {
    data: PropTypes.shape({
      results: PropTypes.shape({
        edges: PropTypes.array.isRequired,
      }).isRequired,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string,
    }).isRequired,
  };

  /**
   * highlights search results.
   * @param  {string} html - The html content of a result.
   * @param  {RegExp} query - The query.
   * @return {string} The highlighted result.
   */
  static highlightResult(html, query) {
    const div = document.createElement('div');
    div.innerHTML = html;

    const results = [null];

    _.forEach(div.childNodes, child => {
      if (child.textContent.match(query)) {
        Search.highlightQuery(child, query);
        results.push(child.outerHTML);
      } else if (results[results.length - 1] !== null) {
        results.push(null);
      }
    });

    if (results[0] === null) {
      results.shift();
    }

    if (results[results.length - 1] === null) {
      results.pop();
    }

    return _.map(results, result => (result === null ? '<div>…</div>' : result)).join('\n');
  }

  /**
   * Highlights a query in a DOM node by mutating it.
   * @param  {HTMLElement} node - The content DOM node.
   * @param  {RegExp} query - The query.
   */
  static highlightQuery(node, query) {
    Search.parseNode(node, child => {
      if (child.nodeName === '#text' && child.nodeValue.match(query)) {
        const span = document.createElement('span');

        span.innerHTML = _.replace(child.nodeValue, query, content => `<span class="search-result">${content}</span>`);

        return span;
      }

      return false;
    });
  }

  /**
   * Parses recursively a DOM node children.
   * @param  {HTMLElement} node - The DOM node.
   * @param  {Function} callback - The callback function to execute on each DOM node.
   */
  static parseNode(node, callback) {
    _.forEach(node.childNodes, child => {
      const result = callback(child);

      if (result) {
        node.replaceChild(result, child);
      } else {
        Search.parseNode(child, callback);
      }
    });
  }

  /**
   * Creates a new instance of the component.
   * @class
   * @param {Object} props - The props of the component.
   */
  constructor(props) {
    super(props);

    const query = !_.isNil(props.location) ? decodeURIComponent(props.location.search.slice(1)) : '';

    this.state = {
      query,
      results: _.trim(query).length > 2 ? this.search(query.toLowerCase()) : [],
    };
  }

  /**
   * Triggered when the query is modified.
   * @param  {SyntheticEvent} event - The associated event.
   */
  onChangeQuery = event => {
    const query = event.target.value;

    this.setState(() => ({ query, results: _.trim(query).length > 2 ? this.search(query.toLowerCase()) : [] }));

    if (_.isEmpty(query)) {
      window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      window.history.replaceState({}, document.title, `${window.location.pathname}?${query}`);
    }
  };

  /**
   * Searches all files based on a specific query.
   * @param  {string} query - The query.
   * @return {Object[]} The search results.
   */
  search(query) {
    const regexp = new RegExp(query, 'ig');

    let results = _.filter(
      this.props.data.results.edges,
      ({ node: { childMarkdownRemark: { html, frontmatter: { title } } } }) => title.match(regexp) || html.match(regexp)
    );

    results = _.map(results, ({ node: { relativePath, childMarkdownRemark: { html, frontmatter: { title } } } }) => ({
      relativePath,
      html: Search.highlightResult(html, regexp),
      title,
    }));

    // We need to filter out matches on the query which were on the markup vs the content.
    results = _.filter(results, result => !_.isEmpty(result.html));

    return results;
  }

  /**
   * Renders the component.
   * @return {JSX} The component.
   */
  render() {
    const { query, results } = this.state;
    return (
      <div>
        <Input onChange={this.onChangeQuery} value={query} />
        {_.isEmpty(results) &&
          !_.isEmpty(query) &&
          query.length > 2 &&
          <div>
            <h2>No result found.</h2>
            <p>¯\_(ツ)_/¯</p>
          </div>}
        {_.map(results, result => <SearchResult key={result.relativePath} result={result} />)}
      </div>
    );
  }
}

/**
 * Search GraphQL query.
 */
/* prettier-ignore */
export const pageQuery = graphql`
  query Search {
    results: allFile(filter: { relativePath: { regex: "/^(apis|hardware)\/.*\\.md$/" } }) {
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
  }
`;
