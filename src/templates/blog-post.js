import React from 'react'
import { graphql } from 'gatsby'
import Proptypes from 'prop-types'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ContentModules from '../content-modules'
import Reveal from 'react-reveal/Reveal'

const BlogPost = ({ pageContext, data }) => {
  const {
    title,
    category,
    createdAt,
    heroImage,
    caption,
    blocks,
    leadin,
  } = data.contentfulBlog
  const { next, prev } = pageContext

  return (
    <div className="animated fadeIn">
      <Helmet>
        <body className="dark-header small-container blog-page" />
        <title>{title} | 🍕 Frazer Findlater</title>
      </Helmet>
      <div className="hero headline">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title gray-500">{category}</div>
                <h2>{title}</h2>
                <div className="date">{createdAt}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="animated fadeInUp">
          <div className="media">
            <Img fluid={heroImage.sizes} />
          </div>
          {caption !== null && (
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="image-caption">
                    <p className="caption">{caption}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Reveal fraction={0.3} duration={2000} effect="fadeInUp">
        <div className="blog-leadin">
          <div className="container-main">
            <div className="row">
              <div className="col-12">
                <div
                  dangerouslySetInnerHTML={{
                    __html: leadin.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      {blocks && <ContentModules blocks={blocks} />}

      <div class="three-dots">
        <span />
        <span />
        <span />
      </div>

      {next ? (
        <div className="section-next">
          <div className="container-large">
            <Link to={'blog/' + next.slug} className="nextprevfooter">
              <div className="content t-light">
                <h4>Next Article</h4>
                <h3>{next.title}</h3>
              </div>
              <Img sizes={next.heroImage.sizes} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="section-next">
          <div className="container-large">
            <Link to={'blog/' + prev.slug} className="nextprevfooter">
              <div className="content t-light">
                <h4>Previous Article</h4>
                <h3>{prev.title}</h3>
              </div>
              <Img sizes={prev.heroImage.sizes} />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

BlogPost.proptypes = {
  data: Proptypes.object.isRequired,
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      id
      title
      slug
      category
      createdAt(formatString: "Do MMMM YYYY")
      caption
      leadin {
        childMarkdownRemark {
          id
          html
        }
      }
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
