import React from 'react'
import Slider from "react-slick";
// import { Link } from 'gatsby'

export default class AsNavFor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {

    var heroSliderMainSettings = {
      fade:true,
      autoplay:true,
      autoplaySpeed:5000,
      pauseOnHover:true,
      speed:1000
    }

    return (
      <div className="animated fadeIn">
        <div className="hero-slider">
          <Slider
            className={'hero-slider__main'}
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            {...heroSliderMainSettings}
          >
            <div className="hero-slider__main_holder">
              <div className="hero-slider__main_image"></div>
              <div className="hero-slider__main_content">
                <h5 className="t-uppercase">Featured Article</h5>
                <h1>Uzbekistan's electronic music festival in a vanished sea</h1>
                <div className="hero-slider__main_content_link">
                  <h5 className="t-uppercase">Read more</h5>
                </div>
              </div>
            </div>
            <div className="hero-slider__main_holder">
              <div className="hero-slider__main_image"></div>
              <div className="hero-slider__main_content">
                <h5 className="t-uppercase">Featured Article</h5>
                <h1>Fantastic beasts and where to find them</h1>
                <div className="hero-slider__main_content_link">
                  <h5 className="t-uppercase">Read more</h5>
                </div>
              </div>
            </div>
            <div className="hero-slider__main_holder">
              <div className="hero-slider__main_image"></div>
              <div className="hero-slider__main_content">
                <h5 className="t-uppercase">Featured Article</h5>
                <h1>Discover and book tours and activities</h1>
                <div className="hero-slider__main_content_link">
                  <h5 className="t-uppercase">Read more</h5>
                </div>
              </div>
            </div>
            <div className="hero-slider__main_holder">
              <div className="hero-slider__main_image"></div>
              <div className="hero-slider__main_content">
                <h5 className="t-uppercase">Featured Article</h5>
                <h1>Europe's 10 best night trains</h1>
                <div className="hero-slider__main_content_link">
                  <h5 className="t-uppercase">Read more</h5>
                </div>
              </div>
            </div>
          </Slider>
          <Slider
            className={'hero-slider__nav'}
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div className="hero-slider__nav__content">
              <h5>Uzbekistan's electronic music festival in a vanished sea</h5>
            </div>
            <div className="hero-slider__nav__content">
              <h5>Fantastic beasts and where to find them</h5>
            </div>
            <div className="hero-slider__nav__content">
              <h5>Discover and book tours and activities</h5>
            </div>
            <div className="hero-slider__nav__content">
              <h5>Europe's 10 best night trains</h5>
            </div>
          </Slider>
          <div className="gradient"></div>
        </div>
        <p>sdsdd sdd</p>
        <p>sdsdd sdd</p>
        <p>sdsdd sdd</p>
        <p>sdsdd sdd</p>
        <p>sdsdd sdd</p>
        <p>sdsdd sdd</p>
        <p>sdsdd sdd</p>
        <p>sdsdd sdd</p>
        <p>sdsdd sdd</p>
        <p>sdsdd sdd</p>
        <p>sdsdd sdd</p>
      </div>
    );
  }
}
