import React from 'react'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal';

export default function BlockImage({image, caption, imageSize}) {
  return (
    <div className="spacer">
      <Reveal fraction={0.3} duration={2000} effect="fadeInUp">
      {imageSize ? (
        <div className="container">
          <div className="row">
            <div className='col-12'>
              <div className="image-block">
                <Img sizes={image.sizes} />
              </div>
            </div>
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
      ) : (
        <>
          <div className="image--large">
            <Img sizes={image.sizes} />
          </div>
          {caption !== null &&
            <div className="image-caption">
              <p className="caption">{caption}</p>
            </div>
          }
        </>
      )}
      </Reveal>
    </div>
  );
}
