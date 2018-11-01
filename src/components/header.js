import React from 'react'
import { Link } from 'gatsby'
// import Logo from '.,/images/logo.png' // relative path to image
import CartIcon from '../images/logo.png';

const Header = ({ siteTitle }) => (
  <div>
    <header>
      <div className="row middle-xs header">
        <div className="col-xs-4">
          <div className="logo">
            {/* <Logo/> */}
            <img alt="sd" src={CartIcon}/>
          </div>
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
