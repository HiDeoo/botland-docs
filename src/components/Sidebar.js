import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Link from './Link';

/**
 * Wrapper component.
 * @type {JSX}
 */
const Wrapper = styled.div`
  font-size: 1rem;
  padding: 0 10px 0 0;
  width: 230px;

  ul {
    border-left: 1px solid black;
    list-style-type: none;
    margin: 0 0 0 5px;
    padding-left: 10px;
  }

  li {
    margin: 5px 0;
  }

  & > div > ul {
    border: 0;
    padding-left: 0;

    & > li {
      &:first-child {
        margin-top: 0;
      }
    }

    & > li > a,
    & > li > div > a {
      font-weight: bold;
    }
  }
`;

/**
 * SidebarLink component.
 * @type {JSX}
 */
const SidebarLink = styled(Link)`
  color: ${props => (props.selected ? '#3bc480' : 'inherit')};
`;

/**
 * SidebarPlaceholder component.
 * @type {JSX}
 */
const SidebarPlaceholder = styled.div`font-weight: bold;`;

/**
 * SidebarItem Component.
 */
const SidebarItem = ({ elements, root, current }) => {
  const { children, title, relativePath, isEmpty } = elements;

  const selected = relativePath === current;

  return children.length > 0
    ? <div>
        {!root &&
          (isEmpty
            ? <SidebarPlaceholder>
                {title}
              </SidebarPlaceholder>
            : <SidebarLink to={relativePath} selected={selected}>
                {title}
              </SidebarLink>)}
        <ul>
          {_.map(children, child =>
            <li key={child.relativePath}>
              <SidebarItem elements={child} current={current} />
            </li>
          )}
        </ul>
      </div>
    : <SidebarLink to={relativePath} selected={selected}>
        {title}
      </SidebarLink>;
};

/**
 * Sidebar Component.
 */
const Sidebar = ({ elements, current }) =>
  <Wrapper>
    <SidebarItem elements={elements} current={current} root />
  </Wrapper>;

/**
 * React Props.
 * @type {Object}
 */
Sidebar.propTypes = {
  elements: PropTypes.shape({
    children: PropTypes.array.isRequired,
  }).isRequired,
  current: PropTypes.string.isRequired,
};

/**
 * React Props.
 * @type {Object}
 */
SidebarItem.propTypes = {
  ...Sidebar.propTypes,
  root: PropTypes.bool,
};

/**
 * React Default Props.
 * @type {Object}
 */
SidebarItem.defaultProps = {
  root: false,
};

export default Sidebar;
