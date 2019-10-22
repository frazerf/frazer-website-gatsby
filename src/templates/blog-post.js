import React, { Component} from 'react';
import { graphql } from 'gatsby'
import Proptypes from 'prop-types';
import Img from 'gatsby-image'
import ContentModules from '../content-modules'

class BlogPost extends Component {

    render() {
        const {
            title,
            createdAt,
            heroImage,
            blocks,
        } = this.props.data.contentfulBlog
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
                  <div className="hero-media">
                    <Img fluid={heroImage.sizes} />
                  </div>
                </div>
                {blocks && <ContentModules blocks={blocks} />}
            </div>
        )
    }
}

BlogPost.proptypes = {
    data: Proptypes.object.isRequired
}


export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: {eq: $slug}) {
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