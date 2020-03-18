import React from 'react'
import Img from 'gatsby-image'

export default function BlockColourImage({image, caption, backgroundColour}) {
  return (
    <div className="spacer">
      <div className="container-large">
        <div className="image-with-bg" style={{background: "#" + backgroundColour}}>
          <div className="image-block">
            <Img sizes={image.sizes} />
          </div>
          {caption !== null &&
            <div className="row justify-content-md-center">
              <div className='col-12'>
                <div className="image-caption">
                  <p className="caption">{caption}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
