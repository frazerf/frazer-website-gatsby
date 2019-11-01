import React from 'react'
import Img from 'gatsby-image'
import Slider from "react-slick";

export default function BlockMultipleImage({images, id}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    className: 'carousel-block'
  };
  return (
    <div className="spacer">
      <Slider {...settings}>
          {images.map((i, id) =>
            <div>
              <div className="image-block" key={id}>
                <Img sizes={i.sizes} />
              </div>
            </div>
          )}
      </Slider>
    </div>
  );
}
