import React from 'react'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import Helmet from 'react-helmet'

import AniLink from "gatsby-plugin-transition-link/AniLink"


export default class Index extends React.Component {

  render() {
    const blogItem = this.props.data.allContentfulBlog.edges;
    const projectItem = this.props.data.allContentfulProject.edges;

    return (
      <div className="main-content">
          <div className="container spacer--top">
            <div className="row justify-content-md-center">
              <nav className="col-11">
                <ul className="nav-list">
                  <li><h6>Life</h6></li>
                  {blogItem.map(({ node, i }) => {
                    return (
                      <li key={node.id}>
                        <AniLink direction="left" cover bg="#eeeeee" duration={1.7} to={`/blog/${node.slug}/`}>{node.title}</AniLink>
                      </li>
                    )}
                  )}
                  <li>
                    <AniLink direction="left" cover bg="#eeeeee" duration={1.7} to={`/blog/`}>+ more...</AniLink>
                  </li>
                </ul>
                <ul className="nav-list">
                  <li><h6>Projects</h6></li>
                  {projectItem.map(({ node, i }) => {
                    return (
                      <li key={node.id}>
                        <AniLink direction="left" cover bg="#eeeeee" duration={1.7} to={`/project/${node.slug}/`}>{node.title}</AniLink>
                      </li>
                    )}
                  )}
                  <li>
                    <AniLink direction="left" cover bg="#eeeeee" duration={1.7} to={`/project/`}>+ more...</AniLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
      </div>
    );
  }
}


export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog(limit: 3, sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          slug
          id
          heroImage {
            sizes(quality: 100, maxWidth: 1400) {
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
    allContentfulProject(limit: 6, sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          slug
          id
          heroImage {
            sizes(quality: 100, maxWidth: 1400) {
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