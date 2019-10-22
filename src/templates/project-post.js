import React, { Component} from 'react';
import { graphql } from 'gatsby'
import Proptypes from 'prop-types';
import Img from 'gatsby-image'
import ContentModules from '../content-modules'

class ProjectPost extends Component {

    render() {
        const {
            title,
            heroImage,
            heroVideo,
            leadin,
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
                          <div dangerouslySetInnerHTML={{__html:leadin.childMarkdownRemark.html}} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {heroVideo === null && (
                    <div className="hero-media">
                      <Img fluid={heroImage.sizes} />
                    </div>
                  )}
                  {heroVideo !== null && (
                    <div className="hero-media">
                      <video autoPlay={true} loop={true} playsInline={true} muted={true} controls={false} poster={heroImage.file.url}>
                        <source src={heroVideo.file.url} type="video/mp4" />
                      </video>
                    </div>
                  )}
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
        file {
          url
        }
      }
      heroVideo {
        file {
          url
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
            columnSize
            body {
              id
              childMarkdownRemark {
                id
                html
              }
            }
          }
          ... on ContentfulBlockOverview {
            title
            overviewContent {
              id
              childMarkdownRemark {
                id
                html
              }
            }
            specs {
              id
              childMarkdownRemark {
                id
                html
              }
            }
            tech {
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
          ... on ContentfulBlockVideo {
            video {
              file {
                url
              }
            }
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
          ... on ContentfulBlockCarousel {
            images {
              id
              sizes(quality: 100, maxWidth: 1800) {
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
          ... on ContentfulBlockContentAndImage {
            content {
              id
              childMarkdownRemark {
                id
                html
              }
            }
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
          }
        }
      }
    }
  }
`