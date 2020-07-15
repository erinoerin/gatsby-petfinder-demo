const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allPetfinderAnimals {
        edges {
          node {
            id
            type
            name
            breeds {
              primary
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const pageTemplate = path.resolve(`./src/templates/dogpage.js`);

    const allPages = result.data.allPetfinderAnimals.edges;

    _.each(allPages, ({ node: page }) => {
      createPage({
        path: `/${page.type}-${page.name}-${page.breeds.primary}/`,
        component: pageTemplate,
        context: {
          id: page.id,
        },
      });
    });
  });
};
