import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';

import Link from './Link';

/**
 * Header links.
 * @type {Object[]}
 */
const links = [
  {
    target: '/search',
    title: 'Search',
  },
  {
    target: '/apis/',
    title: 'APIs',
  },
  {
    target: '/hardware/',
    title: 'Hardware',
  },
  {
    target: "https://github.com/Adam13531/BotLand/wiki/What's-new-(changelog)",
    title: 'Changelog',
  },
  {
    target: 'http://play.bot.land',
    title: 'Play',
  },
];

/**
 * Wrapper component.
 * @type {JSX}
 */
const Wrapper = styled.div`
  color: white;
  display: flex;
  font-size: 1.2rem;
  margin: 0 auto;
  max-width: 960px;
  padding: 20px 0;

  a {
    color: white;
    margin-left: 30px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

/**
 * Title component.
 * @type {JSX}
 */
const Title = styled(Link)`
  flex: 1;
  font-family: 'Roboto Mono', Menlo, Courier, monospace;

  &:hover {
    text-decoration: none;
  }
`;

/**
 * Header Component.
 */
const Header = () =>
  <Wrapper>
    <Title to="/">$ man botland</Title>
    <div>
      {_.map(links, link =>
        <Link to={link.target} key={link.target}>
          {link.title}
        </Link>
      )}
    </div>
  </Wrapper>;

export default Header;
