import React from 'react'
import Img from 'gatsby-image'

export default function BlockMultipleImage({caption, images}) {
  return (
    <div className="spacer">
      <div className="container">
        <div className="col-image">
          {images.map((i, id) =>
            <div className="image-block" key={id}>
              <Img sizes={i.sizes} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
