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
    return (
      <div>
        <div className="hero-slider">
          <Slider
            className={'hero-slider__main'}
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            fade={true}
            autoplay={true}
            autoplaySpeed={5000}
            pauseOnHover={true}
          >
            <div className="hero-slider__main_holder">
              <div className="hero-slider__main_content">
                <h1>Staying overnight in Tunisia's favourite hotels</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="hero-slider__main_holder">
              <div className="hero-slider__main_content">
                <h1>Title 2</h1>
              </div>
            </div>
            <div className="hero-slider__main_holder">
              <div className="hero-slider__main_content">
                <h1>Title 3</h1>
              </div>
            </div>
            <div className="hero-slider__main_holder">
              <div className="hero-slider__main_content">
                <h1>Title 4</h1>
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
              <h3>This is some content 1</h3>
              <p>This is a paragraph 1</p>
            </div>
            <div className="hero-slider__nav__content">
            <h3>This is some content 2</h3>
              <p>This is a paragraph 2</p>
            </div>
            <div className="hero-slider__nav__content">
            <h3>This is some content 3</h3>
              <p>This is a paragraph 3</p>
            </div>
            <div className="hero-slider__nav__content">
            <h3>This is some content 4</h3>
              <p>This is a paragraph 4</p>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
