import React from 'react'
// import Img from 'gatsby-image'

import AniLink from "gatsby-plugin-transition-link/AniLink"

export default ({ blog }) => (
    <>
        <AniLink cover bg="#eeeeee" duration={1.7} to={`/blog/${blog.slug}/`}>{blog.title}</AniLink>
        {/* <Img sizes={blog.heroImage.sizes} /> */}
        <p>{blog.leadin.childMarkdownRemark.excerpt}</p> 
    </>
   
)