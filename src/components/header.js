import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
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

export default Header
