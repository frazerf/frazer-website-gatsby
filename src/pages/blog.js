import React from 'react'
import Layout from '../components/layout'
import BlogPreview from '../components/blog-preview'

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allContentfulBlog.edges;

    return (
        <div className="animated fadeIn">
            <Layout>
                <div className="row">
                  <div className="col-xs-12">
                    <div className="hero__standard">
                      <h5 className="t-uppercase">The life and times</h5>
                      <h1>Blog</h1>
                      <p class="leadin">Check out older posts of the journey so far.</p>
                    </div>
                  </div>
                </div>
                <div className="row center-md">
                {posts.map(({ node }) => {
                    return (
                    <div className="col-xs-12 col-md-8 col-lg-6" key={node.slug}>
                        <BlogPreview blog={node}></BlogPreview>
                    </div>
                    )
                })}
                </div>
            </Layout>
        </div>
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