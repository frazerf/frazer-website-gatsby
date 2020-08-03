import React from 'react'
import { graphql } from 'gatsby'
import Proptypes from 'prop-types'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import ContentModules from '../content-modules'
import Link from 'gatsby-link'

const ProjectPost = ({ pageContext, data }) => {
  const {
    heroImage,
    heroVideo,
    blocks,
    title,
    category,
  } = data.contentfulProject
  const { next, prev } = pageContext

  return (
    <div className="animated fadeIn">
      <Helmet>
        <body className="project-page" />
        <title>{title} | 🍕 Frazer Findlater</title>
      </Helmet>
      <div className="hero full-image animated fadeInUp">
        {heroVideo === null && (
          <div className="media">
            <Img sizes={heroImage.sizes} />
          </div>
        )}
        {heroVideo !== null && (
          <div className="media">
            <video
              autoPlay={true}
              loop={true}
              playsInline={true}
              muted={true}
              controls={false}
              poster={heroImage.file.url}
            >
              <source src={heroVideo.file.url} type="video/mp4" />
            </video>
          </div>
        )}
        <div className="overlay" />
        <div className="content t-light">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title">{category}</div>
                <h1 className="large">{title}</h1>
              </div>
            </div>
          </div>
          <div className="icon-scroll" />
        </div>
      </div>
      <div>{blocks && <ContentModules blocks={blocks} />}</div>

      {next ? (
        <div className="section-next">
          <div className="container-large">
            <Link to={'project/' + next.slug} className="nextprevfooter">
              <div className="content t-light">
                <h4>Next Project</h4>
                <h2>{next.title}</h2>
              </div>
              <Img sizes={next.heroImage.sizes} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="section-next">
          <div className="container-large">
            <Link to={'project/' + prev.slug} className="nextprevfooter">
              <div className="content t-light">
                <h4>Back to previous Project?</h4>
                <h2>{prev.title}</h2>
              </div>
              <Img sizes={prev.heroImage.sizes} />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

ProjectPost.proptypes = {
  data: Proptypes.object.isRequired,
}

export default ProjectPost

export const pageQuery = graphql`
  query projectPostQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      id
      title
      category
      slug
      company
      createdAt(formatString: "Do MMMM YYYY")
      heroImage {
        sizes(quality: 100, maxWidth: 1800) {
          src
          aspectRatio
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
          ... on ContentfulBlockColourImage {
            backgroundColour
            image {
              sizes(quality: 100, maxWidth: 1800) {
                srcSet
                aspectRatio
                src
                srcWebp
                srcSetWebp
                sizes
              }
            }
            caption
          }
          ... on ContentfulBlockColourCarousel {
            backgroundColour
            imagesColour {
              id
              sizes(quality: 100, maxHeight: 600) {
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
