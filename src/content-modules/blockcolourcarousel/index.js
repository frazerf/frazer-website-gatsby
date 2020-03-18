import React from 'react'
import Flickity from 'react-flickity-component'

const flickityOptions = {
  pageDots: true,
  prevNextButtons: false,
  contain: true,
}

export default function BlockColourCarousel({imagesColour, id, backgroundColour}) {
  
  return (
    <div className="carousel-colour-slider" style={{background: "#" + backgroundColour}}>
      <Flickity
        className={'carousel-slider'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        reloadOnUpdate={true}
        disableImagesLoaded={false}
      >
        {imagesColour.map((i, id) =>
          <div key={id}>
            <div className="yes">
              <img alt="" src={i.sizes.src} />
            </div>
          </div>
        )}
      </Flickity>
    </div>
  );
}
