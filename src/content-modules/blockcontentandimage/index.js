import React from 'react'
import Img from 'gatsby-image'

export default function BlockContentAndImage({image, content}) {
  return (

    <div className="spacer">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12 d-flex align-items-center">
            <div dangerouslySetInnerHTML={{__html:content.childMarkdownRemark.html}} />
          </div>
          <div class="col-md-6 col-12">
            <div class="image-block">
              <Img sizes={image.sizes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
