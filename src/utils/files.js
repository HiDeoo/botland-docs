import _ from 'lodash';

/**
 * Sorts a files tree.
 * @param  {Object} tree - The tree to sort.
 * @return {Object} The sorted tree.
 */
const sortTree = tree => ({
  ...tree,
  children: _.map(_.sortBy(_.values(tree.children), 'order'), sortTree),
});

/**
 * Sanitizes a path.
 * @param  {string} path - The path to sanitize.
 * @return {string} The sanitized path.
 */
export const sanitizePath = path => {
  let sanitizedPath = path;

  if (path.match(/\/index\.md$/)) {
    sanitizedPath = `/${path.slice(0, -'/index.md'.length)}`;
  } else {
    sanitizedPath = `/${path.slice(0, -'.md'.length)}`;
  }

  return sanitizedPath;
};

/**
 * Returns the sorted files tree to use in a <Sidebar /> component.
 * @param  {Object[]} files - All the category files.
 * @return {Object} The sorted files tree.
 */
export const getTree = files => {
  const tree = { children: {} };

  _.forEach(files, ({ relativePath, childMarkdownRemark: { html, frontmatter: { title, order } } }) => {
    const sanitizedPath = sanitizePath(relativePath);

    const parts = _.split(sanitizedPath, /\//g).slice(1);
    const last = parts.pop();

    let parent = tree;

    _.forEach(parts, part => {
      if (!parent.children[part]) {
        parent.children[part] = { children: {} };
      }

      parent = parent.children[part];
    });

    parent.children[last] = {
      children: {},
      ...parent.children[last],
      relativePath: sanitizedPath,
      title,
      order,
      isEmpty: _.isEmpty(html),
    };
  });

  return _.head(sortTree(tree).children);
};
