import React from 'react'
import { graphql } from 'gatsby'
import ProjectPreview from '../components/project-preview'

class ProjectIndex extends React.Component {
  render() {
    const posts = this.props.data.allContentfulProject.edges;

    return (
        <div className="main-content">
        <div className="container spacer--top">
            <div className="row justify-content-md-center">
                <nav className="col-11">
                <ul className="nav-list">
                  <li><h6>Projects</h6></li>
                  {posts.map(({ node }) => {
                    return (
                    <li key={node.slug}>
                      <ProjectPreview project={node}></ProjectPreview>
                    </li>
                    )
                  })}
                </ul>
                </nav>
            </div>
        </div>
      </div>
    )
  }
}

export default ProjectIndex

export const pageQuery = graphql`
  query ProjectIndexQuery {
    allContentfulProject(sort: { fields: [createdAt], order: DESC }) {
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