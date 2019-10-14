import React from 'react'
import { graphql } from 'gatsby'
import BlogPreview from '../components/blog-preview'

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allContentfulBlog.edges;

    return (
      <>
      <div className="main-content">
        <div className="container spacer--top">
          <div className="row justify-content-md-center">
            <nav className="col-11">
              <ul className="nav-list">
              {posts.map(({ node }) => {
                return (
                <li key={node.slug}>
                  <BlogPreview blog={node}></BlogPreview>
                </li>
                )
              })}
              </ul>
            </nav>
          </div>
        </div>
        </div>
      </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlog(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
            title
            slug
            createdAt(formatString: "Do MMMM YYYY")
            heroImage {
              sizes(quality: 100, maxWidth: 400, maxHeight: 250) {
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
            leadin {
              childMarkdownRemark {
                excerpt(pruneLength: 120)
               }
            }
        }
      }
    }
  }
`