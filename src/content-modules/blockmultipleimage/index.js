import React from 'react'
import Img from 'gatsby-image'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade';

export default function BlockMultipleImage({caption, images}) {
  return (
    <Fade bottom duration={3000}>
    <div className="spacer">
      <Element name="test1" className="element" >
      <div className="container">
        <div className="col-image">
          {images.map((i, id) =>
            <div className="image-block" key={id}>
              <Img sizes={i.sizes} />
            </div>
          )}
        </div>
      </div>
      </Element>
    </div>
    </Fade>
  );
}
