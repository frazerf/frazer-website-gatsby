import React from 'react'
// import Img from 'gatsby-image'

import AniLink from "gatsby-plugin-transition-link/AniLink"

export default ({ project }) => (
    <>
        <AniLink fade to={`/project/${project.slug}/`}>{project.title}</AniLink>
        <p>{project.leadin.childMarkdownRemark.excerpt}</p>
    </>
   
)