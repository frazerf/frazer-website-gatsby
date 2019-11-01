import React, { Component} from 'react';
import { graphql } from 'gatsby'
import Proptypes from 'prop-types';
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
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
            <Helmet>
              <body className="blog-page" />
            </Helmet>
            <div className="hero animated fadeInUp">
              <div className="hero-media">
                <Img fluid={heroImage.sizes} />
              </div>
            </div>
            <div className="spacer no-bottom hero-blog_content">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2><span>{title}</span></h2>
                    <h5>By Frazer Findlater | {createdAt}</h5>
                  </div>
                </div>
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
            title {
              id
              childMarkdownRemark {
                id
                html
              }
            }
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