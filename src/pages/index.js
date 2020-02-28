import React from 'react'
import { graphql } from 'gatsby'
import Flickity from 'react-flickity-component'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal';

const fade =
  typeof window !== "undefined"
    ? require("flickity-fade")
    : () => null

const flickityHeroOptions = {
  wrapAround: true,
  fullscreen: true,
  autoPlay: 5000,
  pauseAutoPlayOnHover: false,
  pageDots: true,
  prevNextButtons: false,
  fade: true
}

const flickityBlogOptions = {
  pageDots: true,
  cellAlign: 'left',
}

class Index extends React.Component {

  render() {
    const blogItem = this.props.data.allContentfulBlog.edges;
    const projectItem = this.props.data.allContentfulProject.edges;
    const logoSection = this.props.data.allContentfulLogoSection.edges;


    return (
      <div className="animated fadeIn">
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
                <video autoPlay={true} loop={true} playsInline={true} muted={true} controls={false} poster={blogItem[0].node.heroImage.sizes.src}>
                  <source src={blogItem[0].node.heroVideo.file.url} type="video/mp4" />
                </video>
              )}
              <div className="overlay"></div>
              <div className="content">
                <div className="container">
                  <Link to={'/blog/' + blogItem[0].node.slug}>
                    <div className="row">
                      <div className="col-12 col-md-10">
                        <h5>{blogItem[0].node.category}</h5>
                        <h1>{blogItem[0].node.title}.</h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                        <p className="cta-arrow">Read more <svg className="i-arrow" viewBox="0 0 40 40"> <circle cx="20" cy="20" r="19"></circle> <line x1="12.5" y1="20" x2="26.5" y2="20"></line> <line x1="23.5" y1="15" x2="27.5" y2="20"></line> <line x1="23.5" y1="25" x2="27.5" y2="20"></line> </svg></p>
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
                <video autoPlay={true} loop={true} playsInline={true} muted={true} controls={false} poster={projectItem[0].node.heroImage.sizes.src}>
                  <source src={projectItem[0].node.heroVideo.file.url} type="video/mp4" />
                </video>
              )}
              <div className="overlay"></div>
              <div className="content">
                <div className="container">
                  <Link to={'/project/' + projectItem[0].node.slug}>
                    <div className="row">
                    <div className="col-12 col-md-10">
                        <h5>Case Study</h5>
                        <h1>{projectItem[0].node.title}.</h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-8">
                        <div dangerouslySetInnerHTML={{__html:projectItem[0].node.leadin.childMarkdownRemark.html}} />
                        <p className="cta-arrow">View project <svg className="i-arrow" viewBox="0 0 40 40"> <circle cx="20" cy="20" r="19"></circle> <line x1="12.5" y1="20" x2="26.5" y2="20"></line> <line x1="23.5" y1="15" x2="27.5" y2="20"></line> <line x1="23.5" y1="25" x2="27.5" y2="20"></line> </svg></p>
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
                <video autoPlay={true} loop={true} playsInline={true} muted={true} controls={false} poster={blogItem[1].node.heroImage.sizes.src}>
                  <source src={blogItem[1].node.heroVideo.file.url} type="video/mp4" />
                </video>
              )}
              <div className="overlay"></div>
              <div className="content">
                <div className="container">
                  <Link to={'/blog/' + blogItem[1].node.slug}>
                    <div className="row">
                      <div className="col-12 col-md-10">
                        <h5>{blogItem[1].node.category}</h5>
                        <h1>{blogItem[1].node.title}.</h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                        <p className="cta-arrow">Read more <svg className="i-arrow" viewBox="0 0 40 40"> <circle cx="20" cy="20" r="19"></circle> <line x1="12.5" y1="20" x2="26.5" y2="20"></line> <line x1="23.5" y1="15" x2="27.5" y2="20"></line> <line x1="23.5" y1="25" x2="27.5" y2="20"></line> </svg></p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </Flickity>
        </div>

        <div className="section">
            <div className="container">
              <div className="row">
              <div className="col-12 col-md-6">
                  <h2>Hello!<br/><span>Lorem ipsum dolar est.<br/>Take a look around.</span></h2>
                </div>
                <div className="col-12 col-md-6">
                  <p>Led not just by data-driven insight but by unrelenting curiosity, our inquisitive nature combined with strategic thinking and creative vision, makes us the ideal partner for forward thinking organisations.</p>
                </div>
              </div>
            </div>
     
        </div>

        <div className="section light-grey article-carousel">
          <Reveal fraction={0.3} duration={2000} effect="fadeInUp">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-12 col-md-8">
                  <h3>Snapshots of life.</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="col-12 col-md-4 text-right">
                  <p className="cta-arrow"><Link to="/blog/">View all posts <svg className="i-arrow" viewBox="0 0 40 40"> <circle cx="20" cy="20" r="19"></circle> <line x1="12.5" y1="20" x2="26.5" y2="20"></line> <line x1="23.5" y1="15" x2="27.5" y2="20"></line> <line x1="23.5" y1="25" x2="27.5" y2="20"></line> </svg></Link></p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="carousel-slider--blog_container">
                    <Flickity
                      className={'carousel-slider--blog'} // default ''
                      elementType={'div'} // default 'div'
                      options={flickityBlogOptions} // takes flickity options {}
                      disableImagesLoaded={false} // default false
                    >
                      {blogItem.map((i, id) =>
                      <Link key={id} to={"blog/" + i.node.slug} className="slide">
                        <div className="cards">
                          <div className="cards-inner">
                            <Img sizes={i.node.heroImage.sizes} />
                            <div className="content">
                              <h5>{i.node.category}</h5>
                              <h4>{i.node.title}</h4>
                              <p>{i.node.leadin.childMarkdownRemark.excerpt}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                      )}
                    </Flickity>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="section">
          <Reveal fraction={0.3} duration={2000} effect="fadeInUp">
            <div className="container">
              <div className="row">
                <div className="offset-md-2 col-12 col-md-8 text-center">
                  <h3>{logoSection[0].node.title}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>

              <div className="logo-container">
                {logoSection[0].node.companyLogos.map((i, id) =>
                  <div className="logo-item" key={id}>
                    {i.link !== null &&
                    <Link to={'/project/' + i.link}>
                      <img src={i.image.fluid.src} alt={i.link + ' logo'}/>
                    </Link>
                    }
                    {i.link === null &&
                      <img src={i.image.fluid.src} alt={i.link + ' logo'}/>
                    }
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }
}

export default Index

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog(sort: { fields: [updatedAt], order: DESC } limit: 6) {
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

  }
`