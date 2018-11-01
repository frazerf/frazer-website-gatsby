import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ blog }) => (
<Link className="blog-preview" to={`/blog/${blog.slug}/`}>
    <div className="blog-preview__content">
        <h5 className="t-uppercase">{blog.createdAt}</h5>
        <h3>{blog.title}</h3>
        <p>{blog.leadin.childMarkdownRemark.excerpt}</p>
    </div>
    <Img className="blog-preview__image-holder" sizes={blog.heroImage.sizes} />
</Link>
)