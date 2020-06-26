import React from 'react'
import {  } from "gatsby"
import Link from "gatsby-link"
import Headroom from "react-headroom"
import { slide as Menu } from 'react-burger-menu'
import MenuCross from '../images/x.svg';

class Header extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render(props) {
    const data = this.props.nav.contentfulNavigation.navigationItems

    return (
    <>
      <div className="header">
        <Headroom>
          <div className="header-container">
            <Link className="logo" to={`/`}>ff.</Link>
            <Menu
              right
              bodyClassName={ "menu-open" }
              isOpen={this.state.menuOpen}
              customCrossIcon={ <img src={MenuCross} alt="Menu exit" /> }
              onStateChange={(state) => this.handleStateChange(state)}
            >
              <div className="burger-menu">
                <ul>
                  {data.map((item, i) =>
                    <li key={item.id}>
                      <h2><Link onClick={() => this.closeMenu()} to={item.navigationLink}>{item.navigationTitle}</Link></h2>
                    </li>
                  )}
                </ul>
              </div>

              <div className="navigation-social">
                <ul className="socials">
                  <li>
                    <a href="https://www.facebook.com/frazer.findlater" rel="noopener noreferrer" target="_blank" className="icon-facebook">Facebook</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/frazerf/" rel="noopener noreferrer" target="_blank" className="icon-instagram">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/frazer-findlater-b6116335/" rel="noopener noreferrer" target="_blank" className="icon-linkedin2">Linkedin</a>
                  </li>
                </ul>
              </div>
            </Menu>
          </div>
        </Headroom>
      </div>
    </>
    )
  }
}

export default Header
