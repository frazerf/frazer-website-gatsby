import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ project }) => (
    <>
        <Link to={"project/" + project.slug}>
            <div className="cards">
                <div className="cards-inner">
                    <Img sizes={project.heroImage.sizes} />
                    <div className="content">
                        <h5>Case Study</h5>
                        <h4>{project.title}</h4>
                        <p>{project.leadin.childMarkdownRemark.excerpt}</p>
                    </div>
                </div>
            </div>
        </Link> 
    </>
)