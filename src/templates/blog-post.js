import React from 'react';
import { graphql } from 'gatsby'
import Proptypes from 'prop-types';
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ContentModules from '../content-modules'
import Reveal from 'react-reveal/Reveal';

const BlogPost = ({ pageContext, data }) => {
  const {
    title,
    category,
    createdAt,
    heroImage,
    blocks,
    leadin
  } = data.contentfulBlog
  const { next } = pageContext

  return (
    <div className="animated fadeIn">
      <Helmet>
        <body className="dark-header small-container" />
      </Helmet>
      <div className="hero headline">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h5>{category}</h5>
                <h1>{title}</h1>
                <div className="date">{createdAt}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="animated fadeInUp">
          <div className="media">
            <Img fluid={heroImage.sizes} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="image-caption">
                  <p className="caption">In reimagining the space, Virgil Abloh tapped local artist Max Sansing to create a mural on the main wall, adding a stylistic energy to the gym.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reveal fraction={0.3} duration={2000} effect="fadeInUp">
        <div className="blog-leadin">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div dangerouslySetInnerHTML={{ __html: leadin.childMarkdownRemark.html }} />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      {blocks && <ContentModules blocks={blocks} />}

      {next &&
        <div className="section-next">
          <div className="container">
            <Reveal fraction={0.3} duration={2000} effect="fadeInUp">
              <div className="row">
                <div className="col-12">
                  <h4>Next Article</h4>
                  <h2><Link to={"blog/" + next.slug}>{next.title}</Link></h2>
                  <p><Link className="cta-arrow" to={"blog/" + next.slug}>Check it out <svg className="i-arrow" viewBox="0 0 40 40"> <circle cx="20" cy="20" r="19"></circle> <line x1="12.5" y1="20" x2="26.5" y2="20"></line> <line x1="23.5" y1="15" x2="27.5" y2="20"></line> <line x1="23.5" y1="25" x2="27.5" y2="20"></line></svg></Link></p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      }

    </div>
  )
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
      category
      createdAt(formatString: "Do MMMM YYYY")
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
        }
      }
    }
  }
`