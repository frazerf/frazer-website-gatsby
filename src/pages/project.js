import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import ProjectPreview from '../components/project-preview'

class ProjectIndex extends React.Component {
  render() {
    const posts = this.props.data.allContentfulProject.edges;

    return (
      <div className="animated fadeIn">
        <Helmet>
          <body className="dark-header listing" />
        </Helmet>
        <div className="section hero-section mob-spacer-top">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title gray-500">My work</div>
                <h2>Case studies,<br/>side projects &amp; learnings.</h2>
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
                  <ProjectPreview project={node}></ProjectPreview>
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

export default ProjectIndex

export const pageQuery = graphql`
  query ProjectIndexQuery {
    allContentfulProject(sort: { fields: [updatedAt], order: DESC }) {
      edges {
        node {
            title
            slug
            createdAt(formatString: "Do MMMM YYYY")
            heroImage {
              sizes(quality: 100, maxWidth: 400, maxHeight: 400) {
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