import React from 'react';
import { graphql } from 'gatsby'
import Proptypes from 'prop-types';
import Img from 'gatsby-image'
import ContentModules from '../content-modules'
import Reveal from 'react-reveal/Reveal';
import Link from 'gatsby-link'

const ProjectPost = ({ pageContext, data }) => {

  const {
    heroImage,
    heroVideo,
    blocks,
    title,
  } = data.contentfulProject
  const { next } = pageContext

  return (
    <div className="animated fadeIn">
      <div className="hero full-image animated fadeInUp">
        {heroVideo === null && (
          <div className="media">
            <Img fluid={heroImage.sizes} />
          </div>
        )}
        {heroVideo !== null && (
          <div className="media">
            <video autoPlay={true} loop={true} playsInline={true} muted={true} controls={false} poster={heroImage.file.url}>
              <source src={heroVideo.file.url} type="video/mp4" />
            </video>
          </div>
        )}
        <div className="overlay"></div>
        <div className="content t-light">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10">
                <h5>Case Study</h5>
                <h1>{title}</h1>
              </div>
            </div>
          </div>
          <div className="icon-scroll"></div>
        </div>
      </div>
      <div>
        {blocks && <ContentModules blocks={blocks} />}
      </div>

      {next &&
        <Reveal fraction={0.3} duration={2000} effect="fadeInUp">
          <div className="section-next">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h4>Next Article</h4>
                  <h2><Link to={"project/" + next.slug}>{next.title}</Link></h2>
                  <p><Link className="cta-arrow" to={"project/" + next.slug}>Check it out <svg className="i-arrow" viewBox="0 0 40 40"> <circle cx="20" cy="20" r="19"></circle> <line x1="12.5" y1="20" x2="26.5" y2="20"></line> <line x1="23.5" y1="15" x2="27.5" y2="20"></line> <line x1="23.5" y1="25" x2="27.5" y2="20"></line></svg></Link></p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      }
    </div>
  )
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
      company
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
            websiteUrl
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
          ... on ContentfulBlockContentBlock {
            contentTitle
            id
            contentItem {
              title
              id
              content {
                childMarkdownRemark {
                  html
                }
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