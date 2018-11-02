import React from 'react'
import { Link } from "gatsby"
import { slide as Menu } from 'react-burger-menu'

class Header extends React.Component {

  showSettings (event) {
    event.preventDefault();
  }

  render(props) {
    // const data = this.props.nav.contentfulNavigation.navigationItem

    return (
      <div>
        <header>
          <div className="row middle-xs header">
            <div className="col-xs-4">
            <div className="logo"><Link to={`/`}>f<span>f</span>.</Link></div>
            </div>
            <div className="col-xs-8">
              <ul className="nav--primary">
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/blog/`}>Blog</Link></li>
              </ul>
              <div id="outer-container">
                <Menu right outerContainerId={ "outer-container" }>
                  <a id="home" className="menu-item" href="/">Home</a>
                  <a id="about" className="menu-item" href="/about">About</a>
                  <a id="contact" className="menu-item" href="/contact">Contact</a>
                  <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
                </Menu>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="header__line"></div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Header
