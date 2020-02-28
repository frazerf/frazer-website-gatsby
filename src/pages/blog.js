import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import BlogPreview from '../components/blog-preview'

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allContentfulBlog.edges;
    
    return (
      <div className="animated fadeIn">
        <Helmet>
          <body className="dark-header" />
        </Helmet>
        <div className="section small-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8">
                <h2>The life and times.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section light-grey small-top">
          <div className="container">
            <div className="row align-items-stretch">
              {posts.map(({ node }) => {
                return (
                <div className="col-12 col-md-4" key={node.slug}>
                  <BlogPreview blog={node}></BlogPreview>
                </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlog(sort: { fields: [updatedAt], order: DESC }) {
      edges {
        node {
          title
          slug
          createdAt(formatString: "Do MMMM YYYY")
          category
          leadin {
            childMarkdownRemark {
              id
              html
              excerpt(pruneLength: 100)
            }
          }
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
        }
      }
    }
  }
`