import React from 'react'
import Img from 'gatsby-image'
import Flickity from 'react-flickity-component'
import Reveal from 'react-reveal/Reveal';

const flickityOptions = {
  imagesLoaded: true,
  wrapAround: false,
  fullscreen: true,
  pageDots: true,
  prevNextButtons: false
}

export default function BlockMultipleImage({images, id}) {
  
  return (
    <div className="spacer">
      <Reveal fraction={0.3} duration={2000} effect="fadeInUp">
        <Flickity
          className={'carousel-slider'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
        >
          {images.map((i, id) =>
            <div className="image-block" key={id}>
              <Img sizes={i.sizes} />
            </div>
          )}
        </Flickity>
      </Reveal>
    </div>
  );
}
