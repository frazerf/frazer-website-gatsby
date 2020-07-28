import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ project }) => (
    <>
        <Link to={"project/" + project.slug}>
            <div className="image">
                <Img sizes={project.heroImage.sizes} />
            </div>
            <div className="content">
                <div className="title">{project.title}</div>
                <h4 className="gray-300">{project.category}</h4>
            </div>
        </Link> 
    </>
)