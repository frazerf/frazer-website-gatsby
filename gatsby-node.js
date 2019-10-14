const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post.js')
    const projectPostTemplate = path.resolve('src/templates/project-post.js')
    resolve(
      graphql(`
        {
          allContentfulBlog {
            edges {
              node {
                id
                slug
              }
            }
          }
          allContentfulProject {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulBlog.edges.forEach((edge) => {
          createPage ({
            path: `/blog/${edge.node.slug}/`,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        result.data.allContentfulProject.edges.forEach((edge) => {
          createPage ({
            path: `/project/${edge.node.slug}/`,
            component: projectPostTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}