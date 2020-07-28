import React from 'react'
import { graphql } from 'gatsby'
import Flickity from 'react-flickity-component'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'
import BlogPreview from '../components/blog-preview'
import Helmet from 'react-helmet'

import Portrait from '../images/portrait.jpg'

/*eslint-disable */
const fade =
  typeof window !== 'undefined' ? require('flickity-fade') : () => null
/*eslint-enable */

const flickityHeroOptions = {
  wrapAround: true,
  fullscreen: true,
  autoPlay: 5000,
  pauseAutoPlayOnHover: false,
  pageDots: true,
  prevNextButtons: false,
  fade: true,
}

class Index extends React.Component {
  render() {
    const blogItem = this.props.data.allContentfulBlog.edges
    const projectItem = this.props.data.allContentfulProject.edges
    const logoSection = this.props.data.allContentfulLogoSection.edges
    const homepageSection = this.props.data.allContentfulHomePage.edges

    return (
      <div className="animated fadeIn">
        <Helmet>
          <body className="home-page" />
          <title>Home | 🍕 Frazer Findlater</title>
        </Helmet>

        <div className="carousel-slider--home_container t-light">
          <Flickity
            className={'carousel-slider--home'} // default ''
            elementType={'div'} // default 'div'
            options={flickityHeroOptions} // takes flickity options {}
            disableImagesLoaded={true} // default false
          >
            <div className="slide">
              {blogItem[0].node.heroVideo === null && (
                <Img sizes={blogItem[0].node.heroImage.sizes} />
              )}
              {blogItem[0].node.heroVideo !== null && (
                <video
                  autoPlay={true}
                  loop={true}
                  playsInline={true}
                  muted={true}
                  controls={false}
                  poster={blogItem[0].node.heroImage.sizes.src}
                >
                  <source
                    src={blogItem[0].node.heroVideo.file.url}
                    type="video/mp4"
                  />
                </video>
              )}
              <div className="overlay" />
              <div className="content variation">
                <div className="container">
                  <Link to={'/blog/' + blogItem[0].node.slug}>
                    <div className="row">
                      <div className="col-12 col-md-10">
                        <h5>{blogItem[0].node.category}</h5>
                        <h1>{blogItem[0].node.title}</h1>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="slide">
              {projectItem[0].node.heroVideo === null && (
                <Img sizes={projectItem[0].node.heroImage.sizes} />
              )}
              {projectItem[0].node.heroVideo !== null && (
                <video
                  autoPlay={true}
                  loop={true}
                  playsInline={true}
                  muted={true}
                  controls={false}
                  poster={projectItem[0].node.heroImage.sizes.src}
                >
                  <source
                    src={projectItem[0].node.heroVideo.file.url}
                    type="video/mp4"
                  />
                </video>
              )}
              <div className="overlay" />
              <div className="content">
                <div className="container">
                  <Link to={'/project/' + projectItem[0].node.slug}>
                    <div className="row">
                      <div className="col-12 offset-md-1 col-md-10">
                        <h5>Case Study</h5>
                        <h1>{projectItem[0].node.title}</h1>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="slide">
              {blogItem[1].node.heroVideo === null && (
                <Img sizes={blogItem[1].node.heroImage.sizes} />
              )}
              {blogItem[1].node.heroVideo !== null && (
                <video
                  autoPlay={true}
                  loop={true}
                  playsInline={true}
                  muted={true}
                  controls={false}
                  poster={blogItem[1].node.heroImage.sizes.src}
                >
                  <source
                    src={blogItem[1].node.heroVideo.file.url}
                    type="video/mp4"
                  />
                </video>
              )}
              <div className="overlay" />
              <div className="content variation">
                <div className="container">
                  <Link to={'/blog/' + blogItem[1].node.slug}>
                    <div className="row">
                      <div className="col-12 col-md-10">
                        <h5>{blogItem[1].node.category}</h5>
                        <h1>{blogItem[1].node.title}</h1>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Flickity>
        </div>

        <div className="section">
          <Reveal fraction={0.3} duration={1000} effect="fadeInUp">
            <div className="container">
              <div className="row">
                {/* <div className="col-12 col-md-6">
                  <div dangerouslySetInnerHTML={{__html:homepageSection[0].node.aboutColumn1.childMarkdownRemark.html}} />
                </div>
                <div className="col-12 col-md-6">
                  <div dangerouslySetInnerHTML={{__html:homepageSection[0].node.aboutColumn2.childMarkdownRemark.html}} />
                </div> */}
                <div className="col-12">
                  <div className="eeeeep">
                    <div className="content">
                      <div className="next">
                        <div className="title gray-500">About yours truly</div>
                        <h3>
                          Just your typical, idea conjuring, outside-the-box
                          thinking, Notorious B.I.G listening, boy from NZ.
                        </h3>
                        <p>
                          Welcome to your one-stop-shop for everything Frazer
                          Findlater related. I don't take myself too seriously
                          and that's goes for my site as well. So come in and
                          take a glimpse at my life and my work.
                        </p>
                      </div>
                    </div>
                    <div className="image">
                      <img src={Portrait} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title gray-500">Life &amp; times</div>
                <h3>A snapshot of life.</h3>
              </div>
            </div>
            <div className="row align-items-stretch blog-container--home">
              {blogItem.map(({ node }) => {
                return (
                  <div className="col-12 col-md-6 tiles" key={node.slug}>
                    <BlogPreview blog={node} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="row">
              <div className="offset-md-2 col-12 col-md-8 text-center">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      homepageSection[0].node.brandsColumn.childMarkdownRemark
                        .html,
                  }}
                />
              </div>
            </div>

            <div className="logo-container">
              <Fade bottom cascade>
                {logoSection[0].node.companyLogos.map((i, id) => (
                  <div className="logo-item" key={id}>
                    {i.link !== null && (
                      <Link to={'/project/' + i.link}>
                        <img src={i.image.fluid.src} alt={i.link + ' logo'} />
                      </Link>
                    )}
                    {i.link === null && (
                      <img src={i.image.fluid.src} alt={i.link + ' logo'} />
                    )}
                  </div>
                ))}
              </Fade>
            </div>

            <div className="row">
              <div className="offset-md-2 col-12 col-md-8 text-center">
                <Link className="cta" to="/project/">
                  View all projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog(sort: { fields: [createdAt], order: DESC }, limit: 2) {
      edges {
        node {
          title
          category
          slug
          id
          leadin {
            childMarkdownRemark {
              id
              html
              excerpt(pruneLength: 100)
            }
          }
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
          heroVideo {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulProject(sort: { fields: [updatedAt], order: DESC }) {
      edges {
        node {
          title
          company
          category
          slug
          id
          leadin {
            childMarkdownRemark {
              id
              html
              excerpt(pruneLength: 100)
            }
          }
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
          heroVideo {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulLogoSection {
      edges {
        node {
          title
          id
          companyLogos {
            id
            image {
              fluid(quality: 100, maxWidth: 1400) {
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
            link
          }
        }
      }
    }
    allContentfulHomePage {
      edges {
        node {
          aboutColumn1 {
            childMarkdownRemark {
              html
            }
          }
          aboutColumn2 {
            childMarkdownRemark {
              html
            }
          }
          brandsColumn {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
