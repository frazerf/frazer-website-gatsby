import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import BlogPreview from '../components/blog-preview'

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allContentfulBlog.edges

    return (
      <div className="animated fadeIn">
        <Helmet>
          <body className="dark-header listing" />
          <title>Life | 🍕 Frazer Findlater</title>
        </Helmet>
        <div className="section hero-section mob-spacer-top">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title gray-500">Life &amp; Times</div>
                <h2>
                  Mostly photos.
                  <br />
                  Some words if you're lucky...
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="section small-top">
          <div className="container">
            <div className="row align-items-stretch">
              {posts.map(({ node }) => {
                return (
                  <div className="col-12 col-md-6 tiles" key={node.slug}>
                    <BlogPreview blog={node} />
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
