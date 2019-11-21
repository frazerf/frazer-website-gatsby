import React from 'react'
import {  } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { slide as Menu } from 'react-burger-menu'

class Header extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false,
      activeClass: ''
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', () => {
       let activeClass = '';
       if(window.scrollY > 300){
           activeClass = 'active';
       }
       this.setState({ activeClass });
    });
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
      <div className={`header ${this.state.activeClass}`}>
        <div className="header-container">
          <AniLink className="logo" cover bg="#eeeeee" direction="right" duration={1.7} to={`/`}>f.</AniLink>
          
          <Menu
            right
            disableCloseOnEsc
            bodyClassName={ "menu-open" }
            width={ 380 }
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
          >
            <AniLink className="logo" cover bg="#eeeeee" direction="right" duration={1.7} to={`/`}>f.</AniLink>
            <div className="burger-menu">
              <ul>
                {data.map((item, i) =>
                  <li key={item.id}>
                    <AniLink onClick={() => this.closeMenu()} fade to={item.navigationLink}>{item.navigationTitle}</AniLink>
                  </li>
                )}
              </ul>
            </div>

            <div className="navigation-social">
              <ul>
                <li>
                  <a className="icon-facebook" href=""></a>
                </li>
                <li>
                  <a className="icon-instagram" href=""></a>
                </li>
                <li>
                  <a className="icon-linkedin2" href=""></a>
                </li>
              </ul>
            </div>
          </Menu>
        </div>
      </div>
    </div>
    )
  }
}

export default Header
