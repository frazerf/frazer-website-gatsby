import React from 'react'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade';

export default function BlockImage({image, caption, imageSize}) {
  return (
    <Fade bottom duration={3000}>
    <div className="spacer">
      <div className="container">
        <div className="row">
          <div className={(imageSize ? 'col-12 offset-md-1 col-md-10' : 'col-12')}>
            <div className="image-block">
              <Img sizes={image.sizes} />
            </div>
          </div>
        </div>
      </div>
      {caption !== null &&
        <div className="container">
          <div className="row">
            <div className={(imageSize ? 'col-12 offset-md-1 col-md-10' : 'col-12')}>
              <div className="image-caption">
                <h5>{caption}</h5>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
    </Fade>
  );
}
