import React from 'react'
// import Img from 'gatsby-image'

import AniLink from "gatsby-plugin-transition-link/AniLink"

export default ({ blog }) => (
    <>
        <AniLink fade to={`/blog/${blog.slug}/`}>{blog.title}</AniLink>
        <p>{blog.leadin.childMarkdownRemark.excerpt}</p> 
    </>
   
)