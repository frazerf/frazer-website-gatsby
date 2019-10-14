import React from 'react'
// import Img from 'gatsby-image'

import AniLink from "gatsby-plugin-transition-link/AniLink"

export default ({ project }) => (
    <>
        <AniLink cover bg="#eeeeee" duration={2} to={`/project/${project.slug}/`}>{project.title}</AniLink>
        {/* <Img sizes={blog.heroImage.sizes} /> */}
        {/* <p>{blog.leadin.childMarkdownRemark.excerpt}</p>  */}
    </>
   
)