import React from 'react'
import {  } from "gatsby"
import Link from "gatsby-link"

class Footer extends React.Component {

  render(props) {
    const data = this.props.nav.contentfulNavigation.navigationItems

    return (
    <>
      <footer className="t-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {data.map((item, i) =>
                <div key={item.id}>
                  <h3><Link to={item.navigationLink}>{item.navigationTitle}</Link></h3>
                </div>
              )}
            </div>
          </div>
          <div className="row footer-bottom">
            <div className="col-6">
              <ul className="socials left">
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
            <div className="col-6 text-right">
              <p>&copy; Frazer Findlater</p>
            </div>
          </div>
        </div>
      </footer>
    </>
    )
  }
}

export default Footer
