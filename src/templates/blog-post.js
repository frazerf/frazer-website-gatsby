import React, { Component} from 'react';
import Proptypes from 'prop-types';
import Img from 'gatsby-image'
import Layout from '../components/layout'
import {
    FacebookShareButton,
    TwitterShareButton,
    EmailShareButton,
    
    FacebookIcon,
    TwitterIcon,
    EmailIcon,
  } from 'react-share';

class BlogPost extends Component {
    render() {
        const {
            title,
            leadin,
            slug,
            createdAt,
            heroImage
        } = this.props.data.contentfulBlog
        return (
            <div className="animated fadeIn">
                <Layout>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="hero__standard">
                            <h5 className="t-uppercase">{createdAt}</h5>
                            <h1>{title}</h1>
                            <p className="leadin t-italic">Written by: Frazer Findlater</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 blog__hero">
                            <Img className="image" alt="sd" sizes={heroImage.sizes} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-2">
                            <div className="blog__sidebar">
                                <h5 className="t-uppercase">Tags: {createdAt}</h5>
                                <div className="social-shares">
                                    <FacebookShareButton url={'https://heuristic-shannon-7c842a.netlify.com/blog/' } quote={title} className="social--icons">
                                        <FacebookIcon size={40} round />
                                    </FacebookShareButton>
                                    <TwitterShareButton url={'https://heuristic-shannon-7c842a.netlify.com/blog/' + slug} title={title} className="social--icons">
                                        <TwitterIcon size={40} round />
                                    </TwitterShareButton>
                                    <EmailShareButton url={'https://heuristic-shannon-7c842a.netlify.com/blog/' + slug} subject={title} className="social--icons">
                                        <EmailIcon size={40} round />
                                    </EmailShareButton>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-8 blog-post__content">
                            <div dangerouslySetInnerHTML={{__html: leadin.childMarkdownRemark.html}} />
                        </div>
                    </div>
                </Layout>
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
        }
    }
`