import React from 'react'
import { Link, graphql } from 'gatsby'
import Slider from 'react-slick'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

// const BlogPost = ({node}) => {
//   return (
//     <li>
//       <Link to={`/blog/${node.slug}/`}>{node.title}</Link>
//     </li>
//   )
// }

// const IndexPage = ({data}) => {
//   return (
//   <div>
//     <Layout>
//     <ul>
//       {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} />)}
//     </ul>
//     </Layout>
//   </div>
//   )
// }

export default class AsNavFor extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const blogItem = this.props.data.allContentfulBlog.edges;
    var heroSliderMainSettings = {
      fade:true,
      autoplay:true,
      autoplaySpeed:5000,
      pauseOnHover:true,
      speed:1000,
      dots: true,
      arrows: false
    }

    return (
      <div className="animated fadeIn">
        <Helmet>
          <body className="home" />
        </Helmet>
        <Layout>
        <div className="hero-slider">
          <Slider
            className={'hero-slider__main'}
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            {...heroSliderMainSettings}
          >
            {blogItem.map(({ node }) => {
              return (
                <div className="hero-slider__main_holder">
                  <div className="hero-slider__main_image">
                    <Img className="testing" sizes={node.heroImage.sizes} />
                  </div>
                  <div className="hero-slider__main_content">
                    <h5 className="t-uppercase">Featured Article</h5>
                    <Link to={`/blog/${node.slug}/`}>
                      <h1>{node.title}</h1>
                      <div className="hero-slider__main_content_link">
                        <h5 className="t-uppercase">Read more</h5>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })}
          </Slider>
          <Slider
            className={'hero-slider__nav'}
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
          >
          {blogItem.map(({ node }) => {
            return (
              <div className="hero-slider__nav__content">
                <h5>{node.title}</h5>
              </div>
            )
          })}
          
          </Slider>
          <div className="gradient"></div>
        </div>
        </Layout>
      </div>
    );
  }
}


export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog(limit: 4, sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          slug
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
        }
      }
    }
  }
`