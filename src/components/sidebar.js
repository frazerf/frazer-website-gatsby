import React from 'react'
import {  } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { slide as Menu } from 'react-burger-menu'

class Sidebar extends React.Component {

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
    <div>
      <Menu
        right
        disableCloseOnEsc
        width={ 380 }
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <ul>
          {data.map((item, i) =>
            <li key={item.id}>
              <AniLink onClick={() => this.closeMenu()} cover bg="#eeeeee" direction="right" duration={1.7} to={item.navigationLink}>{item.navigationTitle}</AniLink>
            </li>
          )}
        </ul>
      </Menu>
      <div className="sidebar">
        <div className="sidebar-container">
          <AniLink className="logo" cover bg="#eeeeee" direction="right" duration={1.7} to={`/`}>f.</AniLink>
          
          <div>
            <div className="slogan">
              <span>friends</span>
            </div>
          </div>
          <span className="socials">
            +
          </span>
        </div>
      </div>
    </div>
    )
  }
}

export default Sidebar
