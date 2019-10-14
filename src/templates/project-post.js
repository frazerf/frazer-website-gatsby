import React, { Component} from 'react';
import { graphql } from 'gatsby'
import Proptypes from 'prop-types';
import Img from 'gatsby-image'
import ContentModules from '../content-modules'

class ProjectPost extends Component {

    render() {
        const {
            title,
            createdAt,
            heroImage,
            blocks,
        } = this.props.data.contentfulProject
        return (
          <div className="main-content">
                <div className="hero animated fadeInUp">
                  <div className="hero-content">
                    <div className="container">
                      <div className="row justify-content-md-center">
                        <div className="col-11 t-light">
                          <h2>{title}</h2>
                          <p>By Frazer Findlater | {createdAt} | Technology</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hero-image">
                    <Img fluid={heroImage.sizes} />
                  </div>
                </div>
                {blocks && <ContentModules blocks={blocks} />}
            </div>
        )
    }
}

ProjectPost.proptypes = {
    data: Proptypes.object.isRequired
}


export default ProjectPost;

export const pageQuery = graphql`
  query projectPostQuery($slug: String!) {
    contentfulProject(slug: {eq: $slug}) {
      id
      title
      slug
      createdAt(formatString: "Do MMMM YYYY")
      heroImage {
        sizes(quality: 100, maxWidth: 1800) {
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
          html
        }
      }
      blocks {
        __typename
        ... on Node {
          ... on ContentfulBlockTextArea {
            id
            body {
              id
              childMarkdownRemark {
                id
                html
              }
            }
          }
          ... on ContentfulBlockImage {
            imageSize
            image {
              sizes(quality: 100, maxWidth: 1800) {
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
            caption
          }
          ... on ContentfulBlockMultipleImage {
            images {
              sizes(quality: 100, maxWidth: 1800) {
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
            caption
          }
        }
      }
    }
  }
`