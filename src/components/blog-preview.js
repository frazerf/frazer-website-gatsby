import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ blog }) => (
    <>
        <Link to={"blog/" + blog.slug}>
            <div className="image">
                <Img sizes={blog.heroImage.sizes} />
            </div>
            <div className="content">
                <h4 className="gray-300">{blog.category}</h4>
                <div className="title">{blog.title}</div>
            </div>
        </Link>
    </>
)