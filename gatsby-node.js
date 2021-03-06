const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post.js')
    const projectPostTemplate = path.resolve('src/templates/project-post.js')
    resolve(
      graphql(`
        {
          allContentfulBlog(sort: { fields: [updatedAt], order: DESC }) {
            edges {
              node {
                id
                slug
              }
              next {
                title
                slug
                heroImage {
                  sizes(quality: 100) {
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
                }
              }
              previous {
                title
                slug
                heroImage {
                  sizes(quality: 100) {
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
                }
              }
            }
          }
          allContentfulProject(sort: { fields: [updatedAt], order: DESC }) {
            edges {
              node {
                id
                slug
              }
              next {
                title
                slug
                heroImage {
                  sizes(quality: 100) {
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
                }
              }
              previous {
                title
                slug
                heroImage {
                  sizes(quality: 100) {
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
                }
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
              slug: edge.node.slug,
              next: edge.next,
              prev: edge.previous
            }
          })
        })
        result.data.allContentfulProject.edges.forEach((edge) => {
          createPage ({
            path: `/project/${edge.node.slug}/`,
            component: projectPostTemplate,
            context: {
              slug: edge.node.slug,
              next: edge.next,
              prev: edge.previous
            }
          })
        })
        return
      })
    )
  })
}