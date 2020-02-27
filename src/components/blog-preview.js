import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ blog }) => (
    <>
        <Link to={"blog/" + blog.slug}>
            <div className="cards">
                <div className="cards-inner">
                    <Img sizes={blog.heroImage.sizes} />
                    <div className="content">
                        <h5>{blog.category}</h5>
                        <h4>{blog.title}</h4>
                        <p>{blog.leadin.childMarkdownRemark.excerpt}</p>
                    </div>
                </div>
            </div>
        </Link>
    </>
)