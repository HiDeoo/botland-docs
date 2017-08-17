const _ = require('lodash');
const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`{
        allFile(filter: { relativePath: { regex: "/^(apis|hardware)\\\\/.*\\\\.md$/" }}) {
          edges {
            node {
              relativePath
              childMarkdownRemark {id}
            }
          }
        }
      }`).then(({ errors, data }) => {
        if (errors) {
          reject(errors);
        }

        if (!data.allFile) {
          throw new Error('No files found.');
        }

        const component = path.resolve('src/templates/Docs.js');

        _.forEach(data.allFile.edges, ({ node: { relativePath, childMarkdownRemark } }) => {
          if (!childMarkdownRemark) {
            return;
          }

          let pagePath = relativePath.slice(0, -'.md'.length);

          if (relativePath.match(/index\.md$/)) {
            pagePath = relativePath.slice(0, -'/index.md'.length);
          }

          const category = _.split(relativePath, '/')[0];

          createPage({
            path: pagePath,
            component,
            context: {
              category,
              categoryRegex: `/^${category}\\/.*\\.md$/`,
              relativePath,
            },
          });
        });
      })
    );
  });
};
