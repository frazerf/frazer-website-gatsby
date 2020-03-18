import React from 'react'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal';

export default function BlockContentAndImage({image, content}) {
  return (
    <Reveal fraction={0.3} duration={2000} effect="fadeInUp">
      <div className="spacer">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 col-12">
              <div dangerouslySetInnerHTML={{__html:content.childMarkdownRemark.html}} />
            </div>
            <div className="col-md-6 col-12">
              <div className="image-block">
                <Img sizes={image.sizes} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
