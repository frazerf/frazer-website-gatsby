import React from 'react'
import {  } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Sidebar extends React.Component {

  showSettings (event) {
    event.preventDefault();
  }

  render(props) {
    const data = this.props.nav.contentfulNavigation.navigationItems

    return (
      <div className="sidebar">
      
        <div className="sidebar-container">
          <AniLink className="logo" cover bg="#eeeeee" direction="right" duration={1.7} to={`/`}>f.</AniLink>
          <div className="slogan">
            <span>friends</span>
          </div>
          <ul>
            {data.map((item, i) =>
              <li key={item.id}>
                <AniLink cover bg="#eeeeee" direction="right" duration={1.7} to={item.navigationLink}>{item.navigationTitle}</AniLink>
              </li>
            )}
          </ul>
          <div className="socials">
            +
          </div>
        </div>

      </div>
    )
  }
}

export default Sidebar
